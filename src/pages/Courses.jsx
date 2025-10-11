import { useState } from 'react'
import { courses } from '../data/sample-courses'
import CourseCard from '../components/CourseCard'

export default function Courses(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const cats = ['All', ...Array.from(new Set(courses.map(c=>c.category)))]
  const filtered = courses.filter(c=> (category==='All' || c.category===category) && (c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase())))

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <div className="flex gap-3">
          <input placeholder="Search courses" value={query} onChange={(e)=> setQuery(e.target.value)} className="border p-2 rounded" />
          <select value={category} onChange={(e)=> setCategory(e.target.value)} className="border p-2 rounded">
            {cats.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => <CourseCard key={c.id} c={c} />)}
      </div>
    </section>
    )
  }
