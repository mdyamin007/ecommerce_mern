import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerStatus } from "../../../redux/features/seller/sellerSlice";
import TickMark from "../../../assets/images/tick.jpg";
import CrossMark from "../../../assets/images/cross.png";

const CheckSellerStatus = () => {
  const [sellerId, setSellerId] = useState("");
  const [sellerDetails, setSellerDetails] = useState(null);

  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);

  const handleCheck = () => {
    dispatch(getSellerStatus(sellerId));
  };

  useEffect(() => {
    if (seller) {
      setSellerDetails(seller.seller);
    }
  }, [seller]);

  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-4xl font-light tracking-widest">Check the Seller</h2>
      <div className="mt-10 mb-6 ">
        <label className="block text-sm">Seller ID</label>
        <input
          type={"text"}
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
          className="px-3 py-4  rounded focus:outline-none border border-blue-400 "
        />
      </div>
      <button
        onClick={handleCheck}
        className="bg-orange-400 rounded-full text-xl shadow-md px-10 py-4 text-white"
      >
        Check
      </button>

      {sellerDetails && (
        <div className="border p-20 mt-10 flex flex-col items-center justify-center">
          {sellerDetails.status === "verified" ? (
            <>
              <img src={TickMark} className="h-24 w-24" />
              <p className="text-4xl mt-4 text-green-500">
                The seller is {sellerDetails.status}
              </p>
            </>
          ) : (
            <>
              <img src={CrossMark} className="h-20 w-20" />
              <p className="text-4xl mt-4 text-red-500">
                The seller is not verified!
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckSellerStatus;
