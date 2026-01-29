import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ScrollToTop from './animation/ScrollToTop'
import IndustriesOfExcellence from './components/IndustriesOfExcellence'
import CoreTechnologies from './components/CoreTechnologies'
import Footersection from './components/Footer'
import SolutionsSection from './components/SolutionsSection'
import CompanyPage from './pages/CompanyPage'
import WhyUsPage from './pages/WhyUsPage'
import VisionPage from './pages/VisionPage'
import MissionPage from './pages/MissionPage'
import ItConsultingPage from './pages/Solutions/ITConsultingPage'
import ItOutsourcingPage from './pages/Solutions/ITOutsourcingPage'
import TestingQAPage from './pages/Solutions/TestingQAPage'
import MortgageSolutionsPage from './pages/Solutions/MortgageSolutions'
import PowerAppsPage from './pages/Solutions/PowerAppsPage'
import CloudSolutionsPage from './pages/Solutions/CloudSolutionsPage'
import BiVisualizationPage from './pages/Solutions/BiVisualizationPage'

function App() {
  return (
    <>
      <Router>
        {/* ✅ No horizontal scroll, normal vertical scroll */}
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path="/" element={
              <div>
                <HeroSection/>
                <AboutSection/>
                <SolutionsSection/>
                <IndustriesOfExcellence/>
                <CoreTechnologies/>
                {/* <NetworkProcessorsSection/> */}
              </div>
            }/>
            <Route path='/company' element={<CompanyPage/>}/>
            <Route path='/why-us' element={<WhyUsPage/>}/>
            <Route path='/vision' element={<VisionPage/>}/>
            <Route path='/mission' element={<MissionPage/>}/>
            <Route path='/it-consulting' element={<ItConsultingPage/>}/>
            <Route path='/it-outsourcing' element={<ItOutsourcingPage/>}/>
            <Route path='/testing-qa' element={<TestingQAPage/>}/>
            <Route path='/mortgage-solutions' element={<MortgageSolutionsPage/>}/>
            <Route path='/power-apps' element={<PowerAppsPage/>}/>
            <Route path='/cloud-solutions' element={<CloudSolutionsPage/>}/>
            <Route path='/bi-visualization' element={<BiVisualizationPage/>}/>
          </Routes>
          <Footersection/>
        </div>
      </Router>
    </> 
  )
}

export default App