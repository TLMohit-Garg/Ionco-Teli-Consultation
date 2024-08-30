// FileUploader.tsx
import React from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography, Box } from '@mui/material';
import styles from '../../Styles/fileUploader.module.css';

type FileUploaderProps = {
  name: string;
  acceptedFileTypes: string[];
  maxFiles?: number;
  placeholder?: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  name,
  acceptedFileTypes,
  maxFiles = 30,
  placeholder = 'Drag & drop files here, or click to select',
}) => {
  const { control } = useFormContext();

  const [files, setFiles] = React.useState<File[]>([]);
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxFiles,
    onDrop: (files) => {
        setFiles(files); 
      // Handle file drop
    },
  });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={() => (
        <Box
          {...getRootProps()}
          className={styles.dropzone}
        >
          <input {...getInputProps()} />
          <Typography>{placeholder}</Typography>
          <Box>
            {acceptedFiles.map(file => (
              <Typography key={file.name}>{file.size} - {file.size} bytes</Typography>
            ))}
          </Box>
          {fileRejections.length > 0 && (
            <Typography color="error">
              {fileRejections.map(({ file, errors }: FileRejection) => (
                <Box key={file.name}>
                  {errors.map(e => (
                    <Typography key={e.code}>{file.name} - {e.message}</Typography>
                  ))}
                </Box>
              ))}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};

export default FileUploader;
