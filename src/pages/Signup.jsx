import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }
    alert(`Welcome, ${form.name}! (signup complete)`);
    navigate("/");
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            name="email"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            name="password"
            required
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded"
          />
          <input
            name="confirm"
            required
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border p-2 rounded"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded mt-2">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
