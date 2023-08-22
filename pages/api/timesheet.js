import aws from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;
    const timesheetFile = req.files.timesheet;

    aws.config.update({
      accessKeyId: process.env.AWS_ACCESS,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    // Upload the file to S3
    const s3 = new aws.S3();
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // your S3 bucket name
      Key: `timesheets/${timesheetFile.originalname}`,
      Body: timesheetFile.buffer,
      ContentType: timesheetFile.mimetype
    };

    try {
      const uploadResult = await s3.upload(uploadParams).promise();
      
      // After successful upload, send the link via email using AWS SES
      const ses = new aws.SES({ apiVersion: '2010-12-01' });

      const htmlBody = `
        <p>Timesheet uploaded by: ${name}</p>
        <p>Filename: ${timesheetFile.originalname}</p>
        <p>Download Link: <a href="${uploadResult.Location}">Click Here</a></p>
      `;

      const params = {
        Destination: {
          ToAddresses: ['japhetdesouza6@gmail.com'],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: htmlBody,
            },
          },
          Subject: { Data: 'New Timesheet Uploaded' },
        },
        Source: 'noreply@heartbreakinsurancefund.co.uk',
      };

      const emailResult = await ses.sendEmail(params).promise();
      res.status(200).json({ error: false, data: emailResult });

    } catch (error) {
      res.status(500).json({ error: true, data: error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}