import { FiChevronDown, FiMenu, FiX } from "react-icons/fi"
import { FaCaretDown } from "react-icons/fa"
import { useState } from "react"
import Menu from "./Menu"

const Navbar = () => {
  const [page, setPage] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 h-16 w-full flex items-center justify-between bg-primary-100 text-white font-ubuntu xl:px-24 sm:px-12 px-6 z-50">
      <div className="flex items-center xl:space-x-32 md:space-x-16">
        {/* logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={require("../../assets/new Logo with slogan 2.png")}
            alt=""
            className="w-24 h-auto"
          />
        </div>

        {/* main navigation links */}
        <ul className="lg:flex hidden items-center xl:space-x-12 md:space-x-6">
          <li
            className="cursor-pointer font-medium"
            onClick={() => setPage("products")}
          >
            <span
              className={`${
                page === "products"
                  ? "text-primary-300"
                  : "hover:text-primary-300"
              } flex items-center`}
            >
              <p>Products</p>
              <FaCaretDown size={16} className="ml-0.5" />
            </span>
          </li>

          <li
            className="cursor-pointer font-medium"
            onClick={() => setPage("business")}
          >
            <span
              className={`${
                page === "business"
                  ? "text-primary-300"
                  : "hover:text-primary-300"
              } flex group`}
            >
              <p>Business</p>
              <span
                className={`${
                  page === "business"
                    ? "ring-primary-300"
                    : "ring-white group-hover:ring-primary-300"
                } inline-flex items-center rounded-md  px-2 py-0.1 text-xs font-normal text-inherit ring-1 ring-inset ml-1.5`}
              >
                Beta
              </span>
            </span>
          </li>

          <li className="cursor-pointer font-medium">
            <span
              className={`${
                page === "company"
                  ? "text-primary-300"
                  : "hover:text-primary-300"
              } flex items-center`}
              onClick={() => setPage("company")}
            >
              <p>Company</p>
              <FaCaretDown size={16} className="ml-0.5" />
            </span>
          </li>

          <li
            className={`${
              page === "learn" ? "text-primary-300" : "hover:text-primary-300"
            } cursor-pointer font-medium`}
            onClick={() => setPage("learn")}
          >
            Learn
          </li>
        </ul>
      </div>

      <div className="lg:flex hidden items-center">
        <button className="py-2 px-6 font-medium hover:text-primary-300">
          Sign In
        </button>
        <button className="py-2 px-6 bg-white rounded-full text-primary-100 font-medium hover:bg-primary-100 hover:text-white hover:shadow-md">
          Create Account
        </button>

        <div className="ml-4 flex items-center cursor-pointer">
          <div className="bg-white rounded-full p-2 w-18 flex items-center">
            <img
              src={require("../../assets/image-removebg-preview 2world-map.png")}
              alt=""
              className=""
            />
          </div>

          <FiChevronDown size={16} className="ml-0.5" />
        </div>
      </div>

      <div className="lg:hidden block relative">
        {showMenu ? (
          <FiX
            size={24}
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <FiMenu
            size={24}
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        {showMenu && <Menu />}
      </div>
    </nav>
  )
}

export default Navbar
