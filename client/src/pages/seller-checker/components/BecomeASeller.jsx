const BecomeASeller = () => {
  return (
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Become a seller
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Give here your business information and become a seller
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="sellerName" class="leading-7 text-sm text-gray-600">
            Business Name
          </label>
          <input
            type="sellerName"
            id="sellerName"
            name="sellerName"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="sellerPhone" class="leading-7 text-sm text-gray-600">
            Phone
          </label>
          <input
            type="sellerPhone"
            id="sellerPhone"
            name="sellerPhone"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="sellerAddress" class="leading-7 text-sm text-gray-600">
            Address
          </label>
          <input
            type="sellerAddress"
            id="sellerAddress"
            name="sellerAddress"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="sellerWebsite" class="leading-7 text-sm text-gray-600">
            Website (if you have any)
          </label>
          <input
            type="sellerWebsite"
            id="sellerWebsite"
            name="sellerWebsite"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label
            for="sellerDescription"
            class="leading-7 text-sm text-gray-600"
          >
            Description
          </label>
          <textarea
            id="sellerDescription"
            name="sellerDescription"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
        <p class="text-xs text-gray-500 mt-3">Terms and conditions apply</p>
      </div>
    </div>
  );
};

export default BecomeASeller;
