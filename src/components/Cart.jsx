import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="relative top-24 flex gap-6 justify-between sm:mx-auto sm:max-w-4xl items-start mx-2">
      <div className="">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-4 ml-4 mb-3"
          >
            <img
              src={item.img}
              alt="product-img"
              height={150}
              width={150}
              className="rounded-lg"
            />
            <div>
              <h1 className="font-medium text-lg">{item.name}</h1>
              <div className="flex justify-center items-center">
                <span className="text-lg font-medium ">
                  ${item.price.split(".")[0]}
                </span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREMENT_PRODUCT",
                      payload: item,
                    })
                  }
                  className="btn px-2 ml-5 mr-2 text-xl font-bold hover:border-green-500 hover:text-green-500"
                >
                  +
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREMENT_PRODUCT",
                      payload: item,
                    })
                  }
                  className="btn px-2 text-xl ml-2 font-bold hover:border-red-500 hover:text-red-500"
                >
                  -
                </button>
                <button
                  className="ml-4"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    })
                  }
                >
                  <MdDelete size={26} className="hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 p-2 sm:p-10 rounded-lg h-60 w-[35%] sm:w-auto ">
        <h1 className="text-2xl font-medium mb-2">Summary</h1>
        <h2 className="text-xl font-medium mt-5">Total: ${total}</h2>
        <button className="btn mt-10 text-md p-1 sm:text-xl sm:p-2 hover:bg-black">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
