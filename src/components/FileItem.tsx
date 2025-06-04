import React from "react";
import { Download } from "lucide-react";
import { FileData } from "../types";

interface FileItemProps {
  file: FileData;
}

const FileItem: React.FC<FileItemProps> = ({ file }) => {
  return (
    <div className="bg-safra-dark rounded-lg overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 bg-zinc-700 rounded-lg p-2 w-48 h-48 flex items-center justify-center mx-auto md:mx-0">
            <img
              src={file.imageUrl}
              alt={`${file.productName} device`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-gray-200 text-xl">{file.description}</h3>
            <p className="text-gray-300 mt-2">
              {file.productName} v: {file.version}
            </p>
            {file.additionalInfo && (
              <p className="text-gray-400 mt-1 text-sm">
                {file.additionalInfo}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <a
            href={file.downloadUrl}
            download={file.fileName}
            className="bg-yellow-400 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-md flex items-center gap-2 transition-colors duration-200 w-full md:w-auto justify-center"
          >
            <Download size={20} />
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};

export default FileItem;
