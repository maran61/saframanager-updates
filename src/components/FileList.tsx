import React from 'react';
import FileItem from './FileItem';
import { FileData } from '../types';

interface FileListProps {
  files: FileData[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-yellow-400 text-2xl font-bold">Arquivos de Atualização de Telas</h2>
      <div className="space-y-4">
        {files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FileList;