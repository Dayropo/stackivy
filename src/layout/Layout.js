import { useEffect, useState } from "react"
import { FaChevronUp } from "react-icons/fa"
import { Outlet } from "react-router-dom"

const Layout = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > window.innerHeight) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener("scroll", showButton)
  }, [])

  return (
    <main className="min-h-screen relative">
      <Outlet />
      <button
        className={`bottom-4 right-4 w-11 h-11 rounded-full bg-primary-100 items-center justify-center text-white shadow hover:-translate-y-1 transform transition ${
          isActive ? "flex fixed" : "hidden"
        }`}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <FaChevronUp />
      </button>
    </main>
  )
}

export default Layout
