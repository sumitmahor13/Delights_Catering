import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UserDashboard = () => {
  const { getAllOrder } = useContext(AppContext);
  console.log(getAllOrder);

  //get data from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);
  return (
    <div className=" container mx-auto px-4 py-5 mt-8 lg:py-8">
      <div className="bottom">
        <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
          <h2 className=" text-3xl lg:text-6xl font-bold"><span className="text-green-700">Order</span> Details</h2>
            <div>
            {getAllOrder.map((order, index) => {
              if (user.email == order.email) {
                return (
                  <div
                    key={index}
                    className="mt-5 flex flex-col overflow-hidden rounded-xl border border-green-300 md:flex-row"
                  >
                    <div className="w-full border-r border-green-300 bg-green-100 md:max-w-xs">
                      {/* left  */}
                      <div className="p-8">
                        <div className="mb-4">
                          <div className="text-sm font-semibold text-black">
                            Order Id
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            #{order.id}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2">
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Order Date
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.date}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Venue Date
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.addressInfo.venueDate}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">Quantity</div>
                            <div className="text-sm font-medium">
                              {order?.addressInfo?.quantity}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Total Amount
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              ₹
                              {(
                                order.cartItems[index].itemPrice *
                                order.addressInfo.quantity
                              ).toLocaleString("en-IN")}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold ">Status</div>
                            <div className="text-sm font-medium text-green-600 first-letter:uppercase">
                              {order.status}
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-sm font-semibold">
                              Venue Address
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.addressInfo.address}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* right  */}
                    <div className="flex-1">
                      <div className="p-8">
                        <ul className="-my-7 divide-y divide-green-200">
                          {order.cartItems.map((product) => (
                            <li
                              key={product.id}
                              className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                            >
                              <div className="flex flex-1 items-stretch">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-14 w-14 rounded-lg border border-gray-200 object-contain"
                                    src={product.imageUrl}
                                    alt={product.imageUrl}
                                  />
                                </div>
                                <div className="ml-5 flex flex-col justify-between">
                                  <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-900">
                                      {product.itemName}
                                    </p>
                                    <p className="mt-1.5 text-sm font-medium text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="ml-auto flex flex-col items-end justify-between">
                                <p className="text-right text-sm font-bold text-gray-900">
                                  ₹{product.itemPrice.toLocaleString("en-IN")}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
