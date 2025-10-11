import { Link } from 'react-router-dom'
import { courses } from '../data/sample-courses'
import CourseCard from '../components/CourseCard'

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Become a software developer — real skilling, real projects</h1>
            <p className="mb-6 text-slate-200/90">Hands-on courses, mentorship, and industry-aligned curriculum to launch your career.</p>
            <div className="flex gap-3">
              <Link to="/courses" className="px-6 py-3 bg-white text-indigo-700 rounded font-semibold">Explore Courses</Link>
              <a href="#contact" className="px-6 py-3 border rounded">Contact</a>
            </div>
          </div>
          <div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Popular courses</h3>
              <div className="grid gap-3">
                {courses.slice(0,3).map(c => <CourseCard key={c.id} c={c} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Why learners choose us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">Project-based curriculum</div>
          <div className="bg-white p-6 rounded shadow">Mentorship & mock interviews</div>
          <div className="bg-white p-6 rounded shadow">Placement support</div>
        </div>

        <div id="contact" className="mt-12 bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-3">Get in touch (demo)</h3>
          <form onSubmit={(e)=> { e.preventDefault(); alert('Thanks — we will contact you (demo)'); }} className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="Name" className="border p-2 rounded" />
            <input required placeholder="Email" type="email" className="border p-2 rounded" />
            <textarea placeholder="Message" className="border p-2 rounded sm:col-span-2" />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded sm:col-span-2">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}
