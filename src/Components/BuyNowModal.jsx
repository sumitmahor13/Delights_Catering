import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction, cartItems }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className={`w-full px-4 py-3 text-center text-white ${cartItems.length > 0 ? 'bg-green-700' : 'bg-green-200'} border border-transparent rounded-sm`}
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className="modalbg bg-cover flex justify-center items-center">
        <DialogBody className="w-[20rem] lg:w-[30rem] text-end p-5">
          <button onClick={()=>navigate(-1)} className="text-white pb-2 rounded-full text-end ">&#10005;</button>
          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              value={addressInfo.quantity}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  quantity: e.target.value,
                });
              }}
              placeholder="Enter plates quantity"
              className="border-b bg-transparent px-2 py-2 w-full text-white placeholder:text-white outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Enter your name"
              className="border-b bg-transparent px-2 py-2 w-full text-white placeholder:text-white outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Enter venue address"
              className="border-b bg-transparent px-2 py-2 w-full text-white placeholder:text-white outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Enter your mobile Number"
              className="border-b bg-transparent px-2 py-2 w-full text-white placeholder:text-white outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              type="date"
              name="venueDate"
              value={addressInfo.venueDate}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  venueDate: e.target.value,
                });
              }}
              className="border-b bg-transparent px-2 py-2 w-full text-white placeholder:text-white outline-none"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-green-600 border border-transparent rounded-sm"
            >
              Book now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
