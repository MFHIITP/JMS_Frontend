import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    college: "",
    department: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const serv_addr = import.meta.env.VITE_SERV_ADDR

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${serv_addr}/users/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            college: formData.college,
            email: formData.email,
            year: formData.year,
            department: formData.department,
            password: formData.password,
          }),
        }
      );

      if (response.status === 200) {
        window.location.pathname = "/verifyOTP";
      } else {
        alert(
          "You have already registered before. Please remove your earlier registration."
        );
      }
    } catch (error) {
      alert("An error occurred during registration. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 ${
        loading ? "cursor-wait" : ""
      }`}
    >
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register for Jadavpur Maths Society
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "year", label: "Year", type: "text" },
            { id: "college", label: "College", type: "text" },
            { id: "department", label: "Department", type: "text" },
            { id: "password", label: "Password", type: "password" },
            {
              id: "confirmPassword",
              label: "Confirm Password",
              type: "password",
            },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-700 bg-gray-100 focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 font-semibold font-serif text-white bg-blue-500 rounded-md transition-all ${
              loading
                ? "cursor-not-allowed opacity-75"
                : "hover:bg-blue-600 focus:ring-2 focus:ring-offset-1 focus:ring-blue-600"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-md text-gray-600 font-serif font-semibold">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-2xl font-semibold font-serif hover:underline"
            >
              Login
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
