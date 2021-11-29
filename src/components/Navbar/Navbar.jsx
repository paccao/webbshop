import NavLink from "./NavLink"
import Search from "./Search"
import Bookmarks from "./Bookmarks"
import Cart from "./Cart"
import styled from "styled-components"
import { useRef, useEffect } from "react"

export default function Navbar() {
  const navWrapper = useRef(null)
  let sticky

  useEffect(() => {
    // window.scrollY is always how far the top of your screen is from the top of the document (which is 0)
    if (window.scrollY === 0) {
      // getBoundingClientRect is the distance from the element to the scrollY
      sticky = navWrapper.current.getBoundingClientRect().top
    } else {
      // This behaviour occurs because of how react renders its components
      // If we dont start at the top the page, calculate the difference (delta) from the top
      const topDelta = navWrapper.current.getBoundingClientRect().top
      // Get the actual position where we have currently scrolled to
      const actualDelta = topDelta + window.scrollY
      sticky = actualDelta
    }
  }, [navWrapper])

  window.onscroll = function () {
    stickyHandlerFunction()
  }

  function stickyHandlerFunction() {
    if (window.scrollY >= sticky) {
      navWrapper.current.classList.add("sticky")
    } else {
      navWrapper.current.classList.remove("sticky")
    }
  }

  return (
    <Wrapper ref={navWrapper}>
      <nav className="left-nav">
        <ul className="navbar-ul">
          {/* Link tags */}
          <NavLink title={"Home"} href={"/"} />
          <NavLink title={"Products"} href={"#products"} />
          <NavLink title={"Collections"} href={"#collections"} />
        </ul>
      </nav>
      <h2>Taco</h2>
      <nav className="right-nav">
        <ul className="navbar-ul">
          <Search />
          <Bookmarks />
          <Cart />
        </ul>
        {/* if(!loggedin) CTA button  */}
        {/* "login" // else Account icon */}
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  overflow: hidden;
  .left-nav {
    width: 33%;
  }

  .navbar-ul {
    display: flex;
    justify-content: space-between;
    min-width: max-content;
  }

  .right-nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sticky + .content {
  }
`
