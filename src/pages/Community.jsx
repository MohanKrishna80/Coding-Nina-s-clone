export default function Community(){
  const posts = [
    {id:1, user:'Asha', text:'Loved the DSA batch!'},
    {id:2, user:'Ravi', text:'Landing interviews after the course.'}
  ]
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Community</h1>
      <div className="grid gap-4">
        {posts.map(p=> (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{p.user}</div>
            <div className="text-sm text-slate-600">{p.text}</div>
          </div>
        ))}
      </div>
    </section>
  )}
