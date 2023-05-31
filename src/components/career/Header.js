import Navbar from "../ui/Navbar"

const Header = () => {
  return (
    <div className="h-screen bg-primary-100 text-white w-full">
      <Navbar />

      <div className="xl:px-24 sm:px-12 px-6 h-full w-full flex items-center font-grotesk cursor-default">
        <div className="w-full xl:px-36 sm:px-24 px-8">
          <p className="bg-amber-500 font-medium lg:text-6xl sm:text-4xl text-xl pt-10 rounded-t-md w-4/5">
            Join us in shaping..
          </p>
          <p className="bg-secondary-100 font-medium lg:text-6xl sm:text-4xl text-xl pt-10 rounded-t-md w-3/5 ml-auto">
            The Future..
          </p>
          <p className="bg-teal-600 font-medium lg:text-6xl sm:text-4xl text-xl pt-10 rounded-t-md w-3/5 ">
            Of Finance..
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
