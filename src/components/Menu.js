import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/Add">Add Movie</Link>
        </li>
        <li className="icon">
          <Link to="/Cart">
            <FaShoppingCart size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
