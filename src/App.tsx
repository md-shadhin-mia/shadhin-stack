import { Button, Spin } from 'antd'
import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage'
import useAuthentication from './hooks/useAuthentication'
import LoginPage from './auth/LoginPage'



const LazyAdminRoutes = lazy(()=>import('./admin/AdminRoutes'))
function App() {
  const {user, loading} = useAuthentication();
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="admin/*" element={user?<LazyAdminRoutes />:(loading?<LoadingPage />:<Navigate to={'/login'} />)}/>
          <Route path='login' element={user?<Navigate to={'/admin'} />:(loading?<LoadingPage />:<LoginPage />)}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
