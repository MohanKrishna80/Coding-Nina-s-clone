export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-8 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold">Coding Ninjas</div>
            <div className="text-xs">A demo clone for learning purposes.</div>
          </div>
          <div className="flex gap-6">
            <div>Courses</div>
            <div>Practice</div>
            <div>Events</div>
            <div>Community</div>
          </div>
        </div>
        <div className="text-center mt-6">© {new Date().getFullYear()} Coding Ninjas — Clone</div>
      </div>
    </footer>
  )
}
