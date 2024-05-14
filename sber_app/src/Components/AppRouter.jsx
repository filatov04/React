import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Pages } from '../router/router';

const AppRouter = () => {
  return (
    <Routes>
        {Pages.map(page =>
            <Route element={<page.component/>} path={page.path} key={page.path}/>
        )}
    </Routes>
  )
}

export default AppRouter;