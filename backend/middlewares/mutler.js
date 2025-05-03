const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG and PNG are allowed."), false);  // Reject file
    }
};

export const singleUpload = multer({ 
    storage, 
    fileFilter 
}).single("file");
