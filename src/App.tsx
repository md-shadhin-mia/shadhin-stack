import { Button, Spin } from 'antd'
import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage'



const LazyAdminRoutes = lazy(()=>import('./admin/AdminRoutes'))
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="admin/*" element={<LazyAdminRoutes />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
