import { Link } from "react-router-dom"
import { BsFillCartFill } from "react-icons/bs"

function Cart() {
  return (
    <li>
      <Link to="/cart">
        <BsFillCartFill />
      </Link>
    </li>
  )
}

export default Cart
