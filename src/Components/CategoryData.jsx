import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/CartSlice";

const CategoryData = () => {
  const { itemData } = useContext(AppContext);
  const { category } = useParams();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  //filtered by category
  const filteredData = itemData.filter((item) => {
    return item.category.includes(category);
  });

  return (
    <>
      <div className="flex md:w-[80%] lg:w-[80%] flex-col md:mt-5 lg:mt-5 mx-3 lg:mx-0 lg:mr-4 md:mx-0 gap-2">
        <div className="flex">
          <h1 className="text-4xl mb-5 font-bold">{category}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredData.map((item, index) => {
            return (
              <div key={index} className="card-shadow flex-col lg:mb-4 mb-1 bg-white w-[10rem] md:w-[17rem] lg:w-[17rem] mx-auto flex-wrap transition-all ease-in-out duration-300 hover:lg:scale-105 p-2 border">
                <img
                  className=" w-full h-[full] flex flex-wrap object-cover"
                  src={item.imageUrl}
                />
                <div className="flex flex-col gap">
                  <p className="font-bold text-sm  md:text-xl lg:text-xl">{item.itemName}</p>
                  <p className="font-semibold text-lg text-gray-500">₹{item.itemPrice}</p>
                  {cartItems.some((p) => p.id == item.id) ? (
                    <button
                      onClick={() => deleteCart(item)}
                      className="bg-gray-600 text-xs w-full py-3 text-white"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(item)}
                      className="bg-green-700 text-xs w-full py-3 text-white"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryData;
