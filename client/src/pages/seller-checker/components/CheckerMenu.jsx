import { useState } from "react";
import BecomeASeller from "./BecomeASeller";
import CheckSellerStatus from "./CheckSellerStatus";

const CheckerMenu = () => {
  const [sellerStatus, setSellerStatus] = useState(false);
  const [createSeller, setCreateSeller] = useState(false);

  if (sellerStatus) {
    return <CheckSellerStatus />;
  }

  if (createSeller) {
    return <BecomeASeller />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col space-y-6 items-center justify-center">
      <div
        onClick={() => setSellerStatus(true)}
        className="px-10 py-14 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out bg-red-500 rounded-md shadow text-2xl text-white"
      >
        Check Seller Status
      </div>
      <div
        onClick={() => setCreateSeller(true)}
        className="px-10 py-14 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out bg-blue-500 rounded-md shadow text-2xl text-white"
      >
        Become a Seller
      </div>
    </div>
  );
};

export default CheckerMenu;
