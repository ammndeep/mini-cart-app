import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 fixed w-full z-10 top-0 ">
      <div>
        <button className="text-gray-800 hover:text-gray-600">
          <Link to="/" className="text-xl text-black font-medium">
            Shopping Cart
          </Link>
        </button>
      </div>
      <Link to="/cart">
        <button className="bg-green-500 p-2 rounded-lg flex justify-center items-center gap-2">
          Cart
          <FaShoppingCart size={20} /> {cart.length}
        </button>
      </Link>
    </header>
  );
};

export default Header;
