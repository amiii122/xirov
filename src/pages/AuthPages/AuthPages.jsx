import React, { useState } from "react";

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-400 p-4">
      <div className="w-full max-w-md bg-[#532e10]  backdrop-blur rounded-2xl shadow-2xl p-8 text-amber-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-semibold bg-amber-600 hover:bg-amber-500 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-amber-400 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
