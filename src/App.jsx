import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLyout from './layout/HomeLyout'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsandCondition from './pages/TermsandCondition'
import Solutions from './components/Solutions'
import CloudInfrastructure from './pages/CloudInfrastructure'
import Company from './pages/Company'
import IaaSSolutions from './pages/IaaSSolutions'
import Cybersecurity from './pages/Cybersecurity'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Partner from './pages/Partner'
import BecomeAPartner from './pages/BecomeAPartner'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import ORM from './pages/ORM'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeLyout/>}>
      <Route index element={<Home/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='terms-and-conditions' element={<TermsandCondition/>}/>
      <Route path='cloud-infrastructure'element={<CloudInfrastructure/>}/>
      <Route path='solutions'element={<IaaSSolutions/>}/>
      <Route path='cybersecurity'element={<Cybersecurity/>}/>
      <Route path='company'element={<Company/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='resources' element={<Resources/>}/>
      <Route path='partner' element={<Partner/>}/>
      <Route path='become-a-partner' element={<BecomeAPartner/>}/>
      <Route path='software-development' element={<SoftwareDevelopment/>}/>
      <Route path='orm' element={<ORM/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App