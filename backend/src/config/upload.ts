import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (reqeust, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName); // o primerio parametro é um erro, entao colocamos null
    },
  })
};