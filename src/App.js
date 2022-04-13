
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/Main-layout';
import ContactPage from './pages/contact';
import HomePage from './pages/Home/index';
import { PageNotFound } from './pages/404';
import { StoreIndexPage } from './pages/store/index';
import { StoreDetail } from './pages/store/store-detail';
import { Shopping } from './pages/store/shopping';



const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='store' element={<StoreIndexPage />} />
          <Route path='store/detail/:id' element={<StoreDetail />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

