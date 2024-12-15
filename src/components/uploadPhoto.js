import React, { useState } from "react";
import { uploadImageToStorage, saveImageUrls } from "../services/imagesStorage";

const UploadPhoto = () => {
    const [imageUpload, setImageUpload] = useState(null);

    const uploadFile = async () => {
        if (!imageUpload) {
            console.error("Please select an image");
            return;
        }
        try {
            const uploadedURL = await uploadImageToStorage(imageUpload);
            await saveImageUrls([uploadedURL]); // Pass as an array to match the Firestore logic
        } catch (error) {
            console.error("Error uploading file:", error.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Upload Photo</h2>
            <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) => setImageUpload(e.target.files[0])}
            />
            <button onClick={uploadFile} style={{ marginLeft: "10px" }}>
                Upload
            </button>
        </div>
    );
};

export default UploadPhoto;
