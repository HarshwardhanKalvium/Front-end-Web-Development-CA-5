import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookData from '../pages/BookData';
import RegisterForm from '../pages/RegisterForm';
import TermsService from '../pages/TermsService';

const AllRoutes = ({ data }) => (
  <Routes>
    <Route path="/" element={<BookData data={data} />} />
    <Route path="/RegisterForm" element={<RegisterForm />} />
    <Route path="/TermsService" element={<TermsService />} />
  </Routes>
);

export default AllRoutes;