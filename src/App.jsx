import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Practice from './pages/Practice'
import Events from './pages/Events'
import Community from './pages/Community'
import About from './pages/About'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:id' element={<CourseDetail/>} />
          <Route path='/practice' element={<Practice/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
