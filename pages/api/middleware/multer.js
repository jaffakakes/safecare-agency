import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); // Store the file data in memory

export const uploadMiddleware = upload.single('timesheet'); // 'timesheet' is the field name for the file input
