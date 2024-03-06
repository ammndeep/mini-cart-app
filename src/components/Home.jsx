import { CartState } from "../context/Context";
import { IoStarSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function Home() {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <>
      <div className=" m-3 p-3 flex items-center justify-center gap-4 flex-wrap absolute top-24">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-start sm:items-center flex-col justify-center"
          >
            <img
              src={item.img}
              alt="product-image"
              height={300}
              width={300}
              className="rounded-md hover:shadow-lg hover:shadow-black"
            />

            <h1 className="text-xl font-medium mt-2">{item.name}</h1>
            <span className="flex items-center justify-center font-medium text-lg gap-1 my-2 ">
              Rating: {item.ratings}
              <IoStarSharp size={20} color="#e6db10" />
            </span>

            <span className="text-lg font-medium bg-gray-200 px-2 rounded-md mb-2">
              ${item.price.split(".")[0]}
            </span>
            {item.fastDelivery ? (
              <h2 className="text-md font-medium mb-1 ">Fast Delivery</h2>
            ) : (
              <h2 className="text-md font-medium mb-1 text-red-500">
                4 Days Delivery
              </h2>
            )}

            {cart.some((p) => p.id === item.id) ? (
              <button
                className=" bg-red-400 p-2 rounded-lg shadow-md flex justify-center items-center gap-2"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
              >
                Remove From Cart
                <MdDelete size={22} />
              </button>
            ) : (
              <button
                className="bg-green-400 p-2 rounded-lg shadow-lg flex justify-center items-center gap-2"
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              >
                Add To Cart
                <FaCartShopping size={22} />
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
