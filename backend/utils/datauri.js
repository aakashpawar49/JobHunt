import DataUriParser from "datauri/parser.js";
import path from "path";

// Function to convert file buffer into data URI
const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname);  // Just extract the extension directly
    return parser.format(extName, file.buffer);       // Format with extension and buffer
};

export default getDataUri;
