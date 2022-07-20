const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folderStorage = path.join(__dirname, '../public/images/products/uploads');
        cb(null, folderStorage)  
    },
    filename: (req, file, cb) => {
        let nameFile = `product-${Date.now()}-${file.originalname}`
        cb(null, nameFile);
    }
});
const upload = multer({ storage: storage }); 

module.exports = upload;