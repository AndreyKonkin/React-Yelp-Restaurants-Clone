import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyForm from '../MyForm/MyForm';
import PostsContextProvider from '../Context/PostContext';

export default function CafePage() {
  return (
    <PostsContextProvider>
      <Routes>
        <Route path="/" element={<MyForm />} />
      </Routes>
      App
    </PostsContextProvider>
  );
}
