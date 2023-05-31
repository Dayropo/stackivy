import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Positions = () => {
  return (
    <div className="font-grotesk xl:px-24 sm:px-12 px-6 py-16 w-full">
      <p className="lg:text-4xl sm:text-3xl text-2xl text-primary-300 font-bold">
        Open Positions
      </p>

      {/* positions */}
      <div className="mt-16 grid sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="p-8 bg-pos-blue rounded-md space-y-6 bg-no-repeat bg-posBlue bg-center">
          <p className="lg:text-2xl sm:text-xl text-lg font-bold">Design</p>
          <p className="sm:text-sm text-xs">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold lg:text-base sm:text-sm text-xs">
            Position Closed
          </p>
        </div>

        <div className="p-8 bg-pos-green rounded-md space-y-6 bg-no-repeat bg-posGreen bg-center">
          <p className="lg:text-2xl sm:text-xl text-lg font-bold">
            Engineering
          </p>
          <p className="sm:text-sm text-xs">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold lg:text-base sm:text-sm text-xs">
            Position Closed
          </p>
        </div>

        <div className="p-8 bg-pos-yellow rounded-md space-y-6 bg-no-repeat bg-posYellow bg-center">
          <p className="lg:text-2xl sm:text-xl text-lg font-bold">
            Content Writer
          </p>
          <p className="sm:text-sm text-xs">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold lg:text-base sm:text-sm text-xs">
            Position Closed
          </p>
        </div>

        <div className="p-8 bg-pos-red rounded-md space-y-6 bg-no-repeat bg-posRed bg-center">
          <p className="lg:text-2xl sm:text-xl text-lg font-bold">
            Financial Advisor
          </p>
          <p className="sm:text-sm text-xs">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold lg:text-base sm:text-sm text-xs">
            Position Closed
          </p>
        </div>
      </div>

      {/* progress bar */}
      <div class="w-full bg-gray-200 rounded-full h-1 mt-8 dark:bg-gray-700 cursor-pointer">
        <div class="bg-primary-100 h-1 w-1/3 rounded-full cursor-pointer"></div>
      </div>

      {/* prev & next */}
      <div className="flex mt-6 space-x-1">
        <FiChevronLeft size={32} className="text-primary-100 cursor-pointer" />
        <FiChevronRight size={32} className="text-primary-100 cursor-pointer" />
      </div>
    </div>
  )
}

export default Positions
