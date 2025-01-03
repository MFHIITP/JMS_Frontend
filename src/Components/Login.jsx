import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const serv_addr = import.meta.env.VITE_SERV_ADDR;

  useEffect(() => {
    if(localStorage.getItem('registration_message')){
      toast.success(localStorage.getItem('registration_message'), {
        icon: '🎉'
      })
      localStorage.clear()
    }
  }, [])
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`${serv_addr}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;

      const responsed = await fetch(`${serv_addr}/checktoken`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      if (responsed.status === 200) {
        setLoading(false);
        document.cookie = `Token=${data.token}; path=/; domain=${window.location.hostname}; secure=true; sameSite=None;`;
        document.cookie = `ProfileInfo=${encodeURIComponent(`j:` + JSON.stringify(data.profileinfo))};  path=/; domain=${window.location.hostname}; secure=true; sameSite=None;`;
        localStorage.setItem('toast_message', `Login Successful!  Welcome ${data.profileinfo.name}`)
        window.location.href = '/'
      }
    } else {
      setLoading(false);
      setEmail("");
      setPassword("");
      const data = await response.json();
      toast.error(data.message, { duration: 3000 });
    }
  };

  return (
    <div
      className={`flex items-center justify-center py-12 bg-gray-100 ${
        loading ? "cursor-progress" : "cursor-auto"
      }`}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 font-serif">
          Jadavpur Maths Society Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-serif font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
          >
            {loading == true ? <>Logging...</> : <>Login</>}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-md font-serif font-semibold text-gray-600">
            Not signed up?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:underline text-md font-serif font-semibold"
            >
              Register
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
