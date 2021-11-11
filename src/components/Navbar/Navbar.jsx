import NavLink from "./NavLink"
import NavIcon from "./Cart"
import Search from "./Search"
import Bookmarks from "./Bookmarks"
import Cart from "./Cart"

export default function Navbar() {
  return (
    <nav>
      <ul>
        {/* Link tags */}
        <NavLink title={"Home"} href={"/"} />
        <NavLink title={"Products"} href={"#products"} />
        <NavLink title={"Collections"} href={"#collections"} />
        <Search />
        <Bookmarks />
        <Cart />
        {/* Search icon */}
        {/* Bookmarks */}
        {/* Cart */}
        {/* if(!loggedin) CTA button  */}
        {/* "login" // else Account icon */}
      </ul>
    </nav>
  )
}
