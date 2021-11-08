import React from "react"
import NavLink from "./NavLink"

export default function Navbar() {
	return (
		<nav>
			<ul>
				{/* Link tags */}
				<NavLink title={"Home"} href={"/"} />
				<NavLink title={"Products"} href={"#products"} />
				<NavLink title={"Collections"} href={"#collections"} />
				{/* Bookmarks */}
				{/* Search icon */}
				{/* Cart */}
				{/* if(!loggedin) CTA button  */}
				{/* "login" // else Account icon */}
			</ul>
		</nav>
	)
}
