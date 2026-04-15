import './App.css'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Suspense fallback={<p className="page-loading">Loading...</p>}><About /></Suspense>} />
        <Route path="projects" element={<Suspense fallback={<p className="page-loading">Loading...</p>}><Projects /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<p className="page-loading">Loading...</p>}><Contact /></Suspense>} />
      </Route>
    </Routes>
  )
}
