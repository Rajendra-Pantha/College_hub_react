import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const ViewPdf = ({}) => (
  <PDFViewer className='w-[60%] h-[500px]'>
    <MyDocument />
  </PDFViewer>
);


export default ViewPdf