import aws from 'aws-sdk';

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
    }

    const { name, fileUrl } = req.body;

    const ses = new aws.SES();

    const htmlBody = `
        <p>Timesheet uploaded by: ${name}</p>
        <p>Download Link: <a href="${fileUrl}">Click Here</a></p>
    `;

    const emailParams = {
        Destination: {
            ToAddresses: ['dan.zimuto@gmail.com'],
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

    try {
        const emailResult = await ses.sendEmail(emailParams).promise();
        res.status(200).json({ error: false, data: emailResult });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: true, data: error });
    }
};
