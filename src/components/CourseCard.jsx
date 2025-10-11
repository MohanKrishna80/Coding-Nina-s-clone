import { Link } from 'react-router-dom'

export default function CourseCard({c}){
  return (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col">
      <div className="font-semibold text-lg">{c.title}</div>
      <div className="text-xs text-slate-500 mt-2">{c.category} • {c.level}</div>
      <div className="text-sm text-slate-600 mt-3 flex-1">{c.description}</div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm">Duration: <span className="font-medium">{c.duration}</span></div>
        <Link to={`/courses/${c.id}`} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">View</Link>
      </div>
    </div>
  )
}
