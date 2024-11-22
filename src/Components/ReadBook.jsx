import React from 'react';
import { useParams } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function ReadBook() {
  const { thisurl } = useParams();

  return (
    <div className="text-white bg-gray-800 h-full flex justify-center items-center">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <div className="viewer-wrapper bg-gray-800 p-4 w-full h-full">
          <Viewer 
            fileUrl={`https://res.cloudinary.com/dmr09pu10/raw/upload/v1728819848/${thisurl}`} 
            defaultScale={1.2}
            plugins={[]}
            className="pdf-viewer bg-gray-800"
          />
        </div>
      </Worker>
    </div>
  );
}

export default ReadBook;
