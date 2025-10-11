export default function Events(){
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <p className="mb-6">Upcoming workshops and webinars (demo)</p>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Webinar: Master DSA</h3>
          <p className="text-sm text-slate-500">Oct 20, 2025 • Online</p>
          <button className="mt-3 px-3 py-1 bg-indigo-600 text-white rounded">Register</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Career workshop</h3>
          <p className="text-sm text-slate-500">Nov 10, 2025 • Online</p>
          <button className="mt-3 px-3 py-1 bg-indigo-600 text-white rounded">Register</button>
        </div>
      </div>
    </section>
  )}
