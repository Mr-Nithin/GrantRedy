import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RdtiPage from './pages/RdtiPage'
import EmdgPage from './pages/EmdgPage'
import OtherGrantsPage from './pages/OtherGrantsPage'
import ServicesPage from './pages/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import IndustriesPage from './pages/IndustriesPage'
import IndustryBiotechPage from './pages/IndustryBiotechPage'
import IndustryBiomedicalPage from './pages/IndustryBiomedicalPage'
import IndustryAgriculturePage from './pages/IndustryAgriculturePage'
import IndustryItPage from './pages/IndustryItPage'
import IndustryManufacturingPage from './pages/IndustryManufacturingPage'
import AccountingFirmsPage from './pages/AccountingFirmsPage'
import WhyUsPage from './pages/WhyUsPage'
import TeamPage from './pages/TeamPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import EligibilityQuizPage from './pages/EligibilityQuizPage'
import BenefitCalculatorPage from './pages/BenefitCalculatorPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rdti" element={<RdtiPage />} />
        <Route path="emdg" element={<EmdgPage />} />
        <Route path="other-grants" element={<OtherGrantsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industry-biotech" element={<IndustryBiotechPage />} />
        <Route path="industry-biomedical" element={<IndustryBiomedicalPage />} />
        <Route path="industry-agriculture" element={<IndustryAgriculturePage />} />
        <Route path="industry-it" element={<IndustryItPage />} />
        <Route path="industry-manufacturing" element={<IndustryManufacturingPage />} />
        <Route path="accounting-firms" element={<AccountingFirmsPage />} />
        <Route path="why-us" element={<WhyUsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="eligibility-quiz" element={<EligibilityQuizPage />} />
        <Route path="benefit-calculator" element={<BenefitCalculatorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
