import { useParams, useNavigate } from 'react-router-dom'
import { courses } from '../data/sample-courses'
import { useState } from 'react'

export default function CourseDetail(){
  const { id } = useParams()
  const course = courses.find(c=> c.id === id)
  const navigate = useNavigate()
  const [enrolled, setEnrolled] = useState(false)

  if(!course) return <div className="container mx-auto px-6 py-12">Course not found</div>

  return (
    <section className="container mx-auto px-6 py-12">
      <button onClick={()=> navigate(-1)} className="mb-4 text-sm underline">← Back</button>
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <div className="text-sm text-slate-500 mb-4">{course.category} • {course.level} • {course.duration}</div>
        <p className="mb-6">{course.description}</p>
        {!enrolled ? (
          <button onClick={()=> setEnrolled(true)} className="px-4 py-2 bg-indigo-600 text-white rounded">Enroll (demo)</button>
        ) : (
          <div className="px-4 py-2 bg-green-100 rounded text-green-800 inline-block">You're enrolled (demo)</div>
        )}
      </div>
    </section>
  )}