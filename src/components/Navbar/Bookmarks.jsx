import { BsFillBookmarkHeartFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function Bookmarks() {
  return (
    <li>
      <Link to="/bookmarks">
        <BsFillBookmarkHeartFill />
      </Link>
    </li>
  )
}

export default Bookmarks
