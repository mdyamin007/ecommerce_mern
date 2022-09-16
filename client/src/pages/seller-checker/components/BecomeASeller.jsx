import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../setup/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BecomeASeller = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(data);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/seller`, data);
      if (res.status === 201) {
        toast.info("Seller information submitted");
        navigate("/");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Become a seller
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Give here your business information and become a seller
        </p>
        <div className="relative mb-4">
          <label
            htmlFor="sellerEmail"
            className="leading-7 text-sm text-gray-600"
          >
            Email
          </label>
          <input
            type="sellerEmail"
            id="sellerEmail"
            name="sellerEmail"
            value={data?.sellerEmail}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="sellerName"
            className="leading-7 text-sm text-gray-600"
          >
            Business Name
          </label>
          <input
            type="sellerName"
            id="sellerName"
            name="sellerName"
            onChange={handleChange}
            value={data?.sellerName}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="sellerPhone"
            className="leading-7 text-sm text-gray-600"
          >
            Phone
          </label>
          <input
            type="sellerPhone"
            id="sellerPhone"
            name="sellerPhone"
            onChange={handleChange}
            value={data?.sellerPhone}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="sellerAddress"
            className="leading-7 text-sm text-gray-600"
          >
            Address
          </label>
          <input
            type="sellerAddress"
            id="sellerAddress"
            value={data?.sellerAddress}
            onChange={handleChange}
            name="sellerAddress"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="sellerWebsite"
            className="leading-7 text-sm text-gray-600"
          >
            Website (if you have any)
          </label>
          <input
            type="sellerWebsite"
            id="sellerWebsite"
            onChange={handleChange}
            value={data?.sellerWebsite}
            name="sellerWebsite"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="sellerDescription"
            className="leading-7 text-sm text-gray-600"
          >
            Description
          </label>
          <textarea
            id="sellerDescription"
            onChange={handleChange}
            name="sellerDescription"
            value={data?.sellerDescription}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
        <p className="text-xs text-gray-500 mt-3">Terms and conditions apply</p>
      </div>
    </div>
  );
};

export default BecomeASeller;
