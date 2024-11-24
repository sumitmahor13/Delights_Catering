import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/CartSlice";
import toast from "react-hot-toast";
import { app } from "../FirebaseConfig";
import { useState, useEffect } from "react";
import BuyNow from "../Components/BuyNowModal";
import {
  collection,
  Timestamp,
  getFirestore,
  addDoc,
} from "firebase/firestore";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const db = getFirestore(app); //instance of firestore database

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Item Removed");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartTotal = cartItems
    .map((item) => +item.itemPrice)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
  const cartLength = cartItems.length;
  const discount = Math.trunc((cartTotal * 5) / 100);

  // user
  const user = JSON.parse(localStorage.getItem("users"));

  // Buy Now Function
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    quantity: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const buyNowFunction = () => {
    // validation
    if (
      addressInfo.name === "" ||
      addressInfo.address === "" ||
      addressInfo.quantity === "" ||
      addressInfo.mobileNumber === "" ||
      addressInfo.venueDate === ""
    ) {
      return toast.error("All Fields are required");
    }

    // Order Info
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    try {
      const orderRef = collection(db, "order");
      addDoc(orderRef, orderInfo);
      setAddressInfo({
        name: "",
        address: "",
        quantity: "",
        venueDate: "",
        mobileNumber: "",
      });
      toast.success("Order Placed Successfull");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto w-11/12 mt-10 md:mt-16 lg:mt-16 max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="text-green-700">Shopping</span> Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="md:text-xl lg:text-xl font-bold">
              Items in your shopping cart :
            </h2>
            {
              cartItems.length > 0 ? <ul role="list" className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="sm:h-38 sm:w-38 h-20 w-20 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-xl">
                              <a
                                href={item.href}
                                className="font-semibold text-black"
                              >
                                {item.itemName}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex items-end">
                            
                            <p className="text-sm font-medium text-green-600">
                              ₹{" "}
                              {item.itemPrice.toLocaleString("en-IN")}
                            </p>
                            
                          </div>
                          
                        </div>
                      </div>
                      <div className=" flex text-sm">
                      <button
                        onClick={() => deleteCart(item)}
                        type="button"
                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                      >
                        <FaRegTrashCan size={12} className="text-red-500" />

                        <span className="text-xs font-medium text-red-500">
                          Remove
                        </span>
                      </button>
                    </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul> : <h1 className="text-2xl lg:text-4xl text-gray-400 font-bold my-32 text-center">Your Cart is Empty..</h1>
            }
            
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 py-3 text-3xl font-semibold text-gray-900"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">
                    Price ({cartLength} items)
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ {cartTotal}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount 5%</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    - ₹ {discount}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Other Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount (single unit)
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ {cartTotal - discount}
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                <div className="flex gap-4 mb-6">
                  {user ? (
                    <BuyNow
                      addressInfo={addressInfo}
                      setAddressInfo={setAddressInfo}
                      buyNowFunction={buyNowFunction}
                      cartItems={cartItems}
                    />
                  ) : (
                    <Navigate to={"/login"} />
                  )}
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
