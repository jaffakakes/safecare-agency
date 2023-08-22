import aws from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName,lastName, email, enquiry, postcode } = req.body;

    aws.config.update({
      accessKeyId: process.env.AWS_ACCESS,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    const ses = new aws.SES({ apiVersion: '2010-12-01' });

    const htmlBody =`
    <p>From: ${firstName} ${lastName} (${email})</p>
    <p>${postcode}</p>
    <p>${enquiry}</p>
    `;

    const params = {
      Destination: {
        ToAddresses: ['dan.zimuto@gmail.com'], // recipient email
      },
      Message: {
        Body: {
          Html: { 
            Charset: "UTF-8",
            Data: htmlBody 
          },
        },
        Subject: { Data: 'New Contact Form Submission' },
      },
      Source: 'noreply@heartbreakinsurancefund.co.uk', // your source email
    };

    try {
      const data = await ses.sendEmail(params).promise();
      res.status(200).json({ error: false, data: data });
    } catch (error) {
      res.status(500).json({ error: true, data: error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
