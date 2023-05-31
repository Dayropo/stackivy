const Culture = () => {
  return (
    <div className="cursor-default w-full">
      <div className="xl:px-24 sm:px-12 px-6 py-16">
        <p className="font-ubuntu lg:text-4xl sm:text-3xl text-2xl text-primary-300 font-bold">
          The Ardilla Culture
        </p>
      </div>

      {/* image display */}
      <div className="grid grid-cols-8 grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-2 col-span-3">
          <img
            src={require("../../assets/pexels-anna-shvets-3727459 1.png")}
            alt=""
            className="h-full w-auto rounded-r-md"
          />
        </div>

        <div className="col-span-2">
          <img
            src={require("../../assets/pexels-tarzine-jackson-773371 1.png")}
            alt=""
            className="h-full w-auto rounded-md"
          />
        </div>

        <div className="col-span-2">
          <img
            src={require("../../assets/fortune-vieyra-qC7jvmbEmRQ-unsplash 1.png")}
            alt=""
            className="h-full w-auto rounded-md"
          />
        </div>

        <div className="row-span-2 col-span-3">
          <img
            src={require("../../assets/pexels-cottonbro-studio-5081971 1.png")}
            alt=""
            className="h-full w-auto rounded-l-md"
          />
        </div>
      </div>

      {/* content */}
      <div className="xl:px-24 sm:px-8 px-6 py-12 sm:space-y-0 space-y-4 flex sm:flex-row flex-col text-primary-300 font-grotesk">
        <div className="sm:w-1/2 w-full sm:pr-4">
          <p className="lg:text-xl sm:text-lg font-bold">
            Experienced professionals
          </p>
          <p className="font-normal mt-4 lg:text-base text-sm">
            Experienced financial analysts and coaches. Who have been vetted and
            have a wealth of experience. They will guide you through your
            wealth-building journey.
          </p>
          <p className="font-normal mt-1 lg:text-base text-sm">
            We have a great team of diverse and talented professionals who share
            the values of the company. Because of the size of our dream, we need
            more hands on deck and you are always welcome to apply.
          </p>
        </div>

        <div className="sm:w-1/2 w-full sm:pl-4">
          <p className="lg:text-xl sm:text-lg font-bold">We give the best</p>
          <p className="font-normal mt-4 lg:text-base text-sm">
            We know work can be quite dreadful, so we try to make it fun, as
            much as we can. We also offer competitive salaries as well as great
            packages.
          </p>
          <p className="font-normal mt-1 lg:text-base text-sm">
            At Ardilla, dedication and excellence are always rewarded. No
            politics and no funny business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Culture
