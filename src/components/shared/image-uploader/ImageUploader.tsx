import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

interface ImageUploaderProps {
  onImagesUploaded: (images: string[]) => void; // Callback function to pass uploaded images
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesUploaded }) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // Cloudinary configuration
  const cloudName = import.meta.env.VITE_CLOUDINARY_USERNAME; // Replace with your Cloudinary cloud name
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET; // Replace with your upload preset

  // Dropzone configuration
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        // Upload to Cloudinary
        axios
          .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
          .then((response) => {
            const newImageUrl = response.data.secure_url;
            setUploadedImages((prev) => [...prev, newImageUrl]);
          })
          .catch((error) => console.error("Error uploading image:", error));
      });
    },
    [uploadPreset, cloudName]
  );

  // Notify parent component about uploaded images
  useEffect(() => {
    onImagesUploaded(uploadedImages);
  }, [uploadedImages, onImagesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mt-4">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer hover:border-blue-400 transition"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-500">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">
            Upload all files or drag and drop
            <br />
            <span className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</span>
          </p>
        )}
      </div>

      {/* Display Uploaded Images */}
      <div className="mt-4 flex flex-wrap gap-4">
        {uploadedImages.map((image, index) => (
          <div key={index} className="w-24 h-24 overflow-hidden rounded-md">
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
