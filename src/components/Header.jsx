import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginModal from './LoginModal'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
       
        <Link to='/' className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-500 rounded flex items-center justify-center text-white font-bold">
            CN
          </div>
          <span className="font-semibold text-lg">Coding Ninjas</span>
        </Link>

       
        <nav className="hidden md:flex items-center gap-6">
          <Link to='/courses'>Courses</Link>
          <Link to='/practice'>Practice</Link>
          <Link to='/events'>Events</Link>
          <Link to='/community'>Community</Link>
          <Link to='/about'>About</Link>
        </nav>

        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowLogin(true)}
            className="hidden md:inline-block px-4 py-2 border rounded"
          >
            Log in
          </button>
          <Link
            to="/signup"
            className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Sign up
          </Link>

         
          <button
            className="md:hidden p-2 rounded border"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link to='/courses' onClick={() => setOpen(false)}>Courses</Link>
            <Link to='/practice' onClick={() => setOpen(false)}>Practice</Link>
            <Link to='/events' onClick={() => setOpen(false)}>Events</Link>
            <Link to='/community' onClick={() => setOpen(false)}>Community</Link>
            <Link to='/about' onClick={() => setOpen(false)}>About</Link>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  setShowLogin(true)
                  setOpen(false)
                }}
                className="px-3 py-2 border rounded"
              >
                Log in
              </button>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="px-3 py-2 bg-indigo-600 text-white rounded text-center"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}

     
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  )
}
