import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../setup/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/user`, data);
      console.log(response);
      toast.success("Registration submitted");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
    setLoading(false);
  };

  console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <h1 className="text-2xl font-bold text-center mb-5">
          Registration form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="First name"
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={handleChange}
                placeholder="Last name"
                name="lastName"
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
              text-gray-700
              bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={handleChange}
              placeholder="Email address"
              name="email"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={handleChange}
              placeholder="Password"
              name="password"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      disabled:opacity-75
      "
            disabled={loading}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
