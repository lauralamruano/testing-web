"use client";
import React from "react";
import { useState, useRef } from "react";

const ExportComponet: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Devolver el foco al botón de "Choose File"
      if (fileInputRef.current) {
        fileInputRef.current.focus();
      }
    }
  };
  return (
    <div className="p-6 border border-gray-300 rounded-md bg-green-200">
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        aria-label="Choose an image file to upload"
        className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-red-500"
        ref={fileInputRef}
      />
      {selectedFile && (
        <div className="mt-4">
          <p className="text-gray-700">Selected File: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected file preview"
            className="mt-2 max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default ExportComponet;
