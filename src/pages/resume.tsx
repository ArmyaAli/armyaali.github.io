import Head from "next/head";
import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/umd/entry.parcel';


export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="resume_redacted.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Resume;
