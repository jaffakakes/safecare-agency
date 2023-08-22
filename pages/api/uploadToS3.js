import nextConnect from 'next-connect';
import aws from 'aws-sdk';
import { uploadMiddleware } from './middleware/multer';

const handler = nextConnect();

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

handler.use(uploadMiddleware);

handler.post(async (req, res) => {
  const timesheetFile = req.file; // multer adds the file data to req.file

  const s3 = new aws.S3();
  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `timesheets/${timesheetFile.originalname}`,
    Body: timesheetFile.buffer,
    ContentType: timesheetFile.mimetype
  };

  try {
    const uploadResult = await s3.upload(uploadParams).promise();
    res.status(200).json({ error: false, url: uploadResult.Location });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
});

export default handler;
