import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLyout from './layout/HomeLyout'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsandCondition from './pages/TermsandCondition'
import Solutions from './components/Solutions'
import ORM from './pages/ORM'
import Company from './pages/Company'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import Cybersecurity from './pages/Cybersecurity'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Partner from './pages/Partner'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeLyout/>}>
      <Route index element={<Home/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-and-conditions' element={<TermsandCondition/>}/>
      <Route path='orm'element={<ORM/>}/>
      <Route path='solutions'element={<SoftwareDevelopment/>}/>
      <Route path='cybersecurity'element={<Cybersecurity/>}/>
      <Route path='company'element={<Company/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='resources' element={<Resources/>}/>
      <Route path='partner' element={<Partner/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App