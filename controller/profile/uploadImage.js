const multer = require('multer');
const { post } = require('../../routes/route');
async function storeImage(req, res) {
  const storage = multer.diskStorage({
    destination: '/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
  });
  // fetch('/imageUpload').then(alert('done'));
}

module.exports = {
  storeImage,
};
