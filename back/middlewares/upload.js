const multer = require('multer');
const path = require('path');

const folderUploads = path.resolve('public/images/avatars');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, folderUploads)
  },
  filename(req, file, cb) {
    console.log('fileName multer');
    const type = file.mimetype.match(/\/(.*)$/i)[1];
    const fileName = `avatar_${Date.now()}.${type}`;
    cb(null, `${fileName}`);
    req.params.photoPath = `/images/avatars/${fileName}`;
  },
});
const fileFilter = (req, file, cb) => { 
    const typeFile = file.mimetype;
    if(typeFile === 'image/png' || typeFile === 'image/jpg' || typeFile === 'image/jpeg'|| typeFile === 'image/webp') {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

const limits = { fileSize: 1000000 };

const upload = multer({storage, fileFilter, limits});
const uploadSingle = upload.single('picture');

module.exports = {
  uploadSingle
}