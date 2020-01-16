import PictureController from '../controllers/PictureController';
import multer from 'multer';
import uploadConfig from '../config/upload';
const upload = multer(uploadConfig);
module.exports = (app) => {
    app.post('/picture', upload.single('file') , PictureController.store);
    app.get('/picture/:token?', PictureController.index);
    
}