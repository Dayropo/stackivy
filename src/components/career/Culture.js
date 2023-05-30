const Culture = () => {
  return (
    <div className="min-h-screen cursor-default">
      <div className="px-24 py-16">
        <p className="font-ubuntu text-4xl text-primary-300 font-bold">
          The Ardilla Culture
        </p>
      </div>

      {/* image display */}
      <div className="flex w-full items-center justify-between">
        <div className="w-[36%] relative">
          <img
            src={require("../../assets/pexels-anna-shvets-3727459 1.png")}
            alt=""
            className="w-full h-auto rounded-r-md"
          />
        </div>

        <div className="w-1/4 flex flex-col ">
          <div className="h-full relative pb-4 mx-auto">
            <img
              src={require("../../assets/pexels-tarzine-jackson-773371 1.png")}
              alt=""
              className="w-auto h-full rounded-md"
            />
          </div>

          <div className="h-full relative pt-4 mx-auto">
            <img
              src={require("../../assets/fortune-vieyra-qC7jvmbEmRQ-unsplash 1.png")}
              alt=""
              className="w-auto h-full rounded-md"
            />
          </div>
        </div>

        <div className="w-[36%] relative">
          <img
            src={require("../../assets/pexels-cottonbro-studio-5081971 1.png")}
            alt=""
            className="w-full h-auto rounded-l-md"
          />
        </div>
      </div>

      {/* content */}
      <div className="px-24 py-12 flex text-primary-300 font-grotesk">
        <div className="w-1/2 pr-4">
          <p className="text-xl font-bold">Experienced professionals</p>
          <p className="font-normal mt-4">
            Experienced financial analysts and coaches. Who have been vetted and
            have a wealth of experience. They will guide you through your
            wealth-building journey.
          </p>
          <p className="font-normal mt-1">
            We have a great team of diverse and talented professionals who share
            the values of the company. Because of the size of our dream, we need
            more hands on deck and you are always welcome to apply.
          </p>
        </div>

        <div className="w-1/2 pl-4">
          <p className="text-xl font-bold">We give the best</p>
          <p className="font-normal mt-4">
            We know work can be quite dreadful, so we try to make it fun, as
            much as we can. We also offer competitive salaries as well as great
            packages.
          </p>
          <p className="font-normal mt-1">
            At Ardilla, dedication and excellence are always rewarded. No
            politics and no funny business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Culture
