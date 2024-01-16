// // import React from 'react'
// // // import ME from 'file///C:\Users\Aashis\Desktop\AllFiles\Project\CampusHub\pdf\65a2174dfb459f6e40993eed_65a15f467c6207f832e9389e.pdf';
// // import Frame from "react-frame-component"
// // const MyDocument = ({path}) => {
// //   console.log("filename from mydocument ",path.file_path)
// //   const p = "C:\\Users\\Aashis\\Desktop\\AllFiles\\Project\\CampusHub\\pdf\\65a0fb8bf2b261daee51dd02_659cee7b610b9b2a18d10b9b.pdf"
// //   const iframeStyle = {
// //     width: '100%', // Set the width as needed
// //     height: '500px', // Set the height as needed
// //     border: 'none',
// //     zoom: '110%', // Set the initial zoom level here
// //   };


// //   if(path.err){
// //     return (<div>Error loading page</div>)
// //   }
// //   else{
// //      return (
// //     <div className='flex justify-center w-[70%]'> 
// //     <Frame>
// //       <iframe src={p} 
// //           className=' border-red-500 shadow-lg shadow-red-500'
// //           width = "100%"
// //           height={"500px"}
// //           title="My Resume"
// //           style={iframeStyle}
// //       />
// //       </Frame>
// //     </div>

// //   )
// //   }


 
// // }

// // export default MyDocument


// // import React from 'react';
// // import { Document, Page } from 'react-pdf';

// // const PDFViewer = () => {
// //  const pdfURL = "./abc.pdf"

// //  return (
// //    <div>
// //      <Document file={pdfURL}>
// //        <Page pageNumber={1} />
// //      </Document>
// //    </div>
// //  );
// // };

// // export default PDFViewer;

// // import React from 'react';
// // import { Worker, Viewer } from '@react-pdf-viewer/core';

// // const PdfViewer = () => {
// //   return (
// //     <div>
// //       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@$2.7.570/build/pdf.worker.min.js`}>
// //         <Viewer fileUrl="./abc.pdf" />
// //       </Worker>
// //     </div>
// //   );
// // };

// // export default PdfViewer;
// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const PdfViewer = () => {
//   return (
//     <div>
//       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
//         <Viewer fileUrl="./abc.pdf" />
//       </Worker>
//     </div>
//   );
// };

// export default PdfViewer;



import React from 'react';
import { Page, Text, View, Document, StyleSheet , Font } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width : "100%",
    border : "none",
    outline : "none",
    scrollY : "no-scroll",
    overflow : "visible"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
});

// Create Document Component
const MyDocument = ({contents}) => {
  return (
    <Document className="w-full h-full  no-scrollbar" title='java programming'>
    <Page size="A4"  style={styles.page} >
    
      <View style={styles.section} >
        <Text>{contents.content}
        </Text>
      </View>
    </Page>
  </Document>
  )
}

  // <Document file = "http://localhost:8080/pdf/65a0ef14c40fedfcf3323323_659cdc3633e46249ce7abd8a.pdf">
  //   <Page size="A4" pageNumber = {1} className='page'/>
  // </Document>


export default MyDocument

