import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context/context';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth);
  return (
    isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route element={<route.component/>} path={route.path} key={route.path}/>
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route element={<route.component/>} path={route.path} key={route.path}/>
            )}
        </Routes>
  )
}

export default AppRouter;