import React from "react"
import { Link } from "react-router-dom"

export default function NavLink({ title, href }) {
	return (
		<li>
			<Link to={href}>{title}</Link>
		</li>
	)
}
