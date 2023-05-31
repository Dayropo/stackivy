const Menu = () => {
  return (
    <div className="origin-top-right absolute top-0 right-0 mt-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
      {/* main links */}
      <ul className="text-primary-100">
        <li className="group hover:bg-primary-100 py-2 px-4 cursor-pointer">
          <span className="group-hover:text-white cursor-pointer text-sm font-medium">
            Products
          </span>
        </li>

        <li className="group hover:bg-primary-100 py-2 px-4 cursor-pointer flex items-center">
          <span className="group-hover:text-white cursor-pointer text-sm font-medium">
            Business
          </span>
          <span className="inline-flex items-center rounded-md px-2 py-0.1 text-xs font-normal text-inherit group-hover:text-white group-hover:ring-white ring-primary-100 ring-1 ring-inset ml-1.5 cursor-pointer">
            Beta
          </span>
        </li>

        <li className="group hover:bg-primary-100 py-2 px-4 cursor-pointer">
          <span className="group-hover:text-white cursor-pointer text-sm font-medium">
            Company
          </span>
        </li>

        <li className="group hover:bg-primary-100 py-2 px-4 cursor-pointer">
          <span className="group-hover:text-white cursor-pointer text-sm font-medium">
            Learn
          </span>
        </li>
      </ul>

      {/* sign in & registration */}
      <ul className="text-primary-100">
        <li className="group hover:bg-primary-100 py-2 px-4 cursor-pointer">
          <span className="group-hover:text-white cursor-pointer text-sm font-medium">
            Sign In
          </span>
        </li>

        <li className="py-2 px-4 flex justify-center">
          <button className="py-2 px-6 bg-white border-2 border-primary-100 rounded-full text-primary-100 font-medium hover:bg-primary-100 hover:text-white hover:shadow-md text-sm">
            Create Account
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
