import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TotalOrder = () => {
  const { getAllOrder, deleteOrder } = useContext(AppContext);
  console.log(getAllOrder);

  return (
    <>
      <div>
        <div className="w-full overflow-x-auto">
          {/* text  */}
          <h1 className="text-xl font-semibold ml-2 text-gray-400 my-3">
          Dashboard &#62; <span className="text-green-700">Orders</span>
          </h1>
        </div>
        <div className="mx-2">
          {getAllOrder.map((order, index) => {
            return (
              <div
                key={index}
                className="mt-5 flex flex-col overflow-hidden rounded-xl border mx-2 lg:mx-0 md:mx-0 border-green-300 md:flex-row"
              >
                <div className="lg:w-[90%] border-r border-green-300 bg-green-100 md:max-w-xs">
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
                        <div className="text-sm font-semibold">Order Date</div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.date}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm font-semibold">Venue Date</div>
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
                          Venue Address
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.addressInfo.address}
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
                    </div>
                    <button className="bg-red-600 text-white py-2 px-4 rounded-sm" onClick={() => deleteOrder(order.id)}>Delete Order</button>
                  </div>
                </div>
                {/* right  */}
                <div className="flex-1">
                  <div className="px-2">
                    <ul className="divide-y divide-gray-200">
                      {order.cartItems.map((product) => (
                        <li
                          key={product.id}
                          className="flex flex-col justify-between space-x-5 py-2 md:flex-row"
                        >
                          <div className="flex flex-1 items-stretch">
                            <div className="flex-shrink-0">
                              <img
                                className="h-14 w-14 rounded-md border border-gray-200 object-contain"
                                src={product.imageUrl}
                                alt={product.imageUrl}
                              />
                            </div>
                            <div className="ml-2 flex flex-col justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900">
                                  {product.itemName}
                                </p>
                                <p className="mt-1.5 text-sm font-medium text-gray-500">
                                  {product.itemPrice}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TotalOrder;
