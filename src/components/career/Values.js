const Values = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 font-grotesk cursor-default">
      <div className="text-primary-300 w-3/5 mx-24">
        <p className="text-4xl font-bold">Our Values</p>
        <p className="font-normal mt-4">
          At Ardilla, our mission is to help people across the continent build
          wealth and achieve well thought out financial goals. However, we
          cannot do it alone.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 text-white mt-16 px-[86px]">
        {/* excellence */}
        <div className="h-[600px]">
          <div className="h-4/5 w-full bg-secondary-100 rounded-tr-md rounded-bl-[48px] bg-no-repeat bg-bottom bg-excellence px-6 py-6 flex flex-col">
            <p className="text-xl py-12">Excellence</p>
            <p className="text-sm font-medium">
              We always bring our A game to work, putting our best foot forward.
            </p>
          </div>
        </div>

        {/* dedication */}
        <div className="h-[600px]">
          <div className="h-full w-full bg-blue-600 rounded-tr-md rounded-bl-[48px] bg-no-repeat bg-top bg-dedication px-6 py-6 flex flex-col justify-center">
            <p className="text-xl py-12">Dedication</p>
            <p className="text-sm font-medium">
              Consistency is the code to turning dreams to reality and at
              Ardilla, we have a lot of dreams to transform.
            </p>
          </div>
        </div>

        {/* team work */}
        <div className="h-[600px]">
          <div className="h-full w-full bg-amber-500 rounded-tr-md rounded-bl-[48px] bg-no-repeat bg-top bg-teamwork px-6 py-6 flex flex-col justify-center">
            <p className="text-xl py-12">Team Work</p>
            <p className="text-sm font-medium">
              No one ever built anything alone. Strength in numbers is all good
              but more importantly is strength in working together.
            </p>
          </div>
        </div>

        {/* positivity */}
        <div className="h-[600px]">
          <div className="h-4/5 w-full bg-teal-600 rounded-tr-md rounded-bl-[48px] bg-no-repeat bg-right bg-positivity px-6 py-6 flex flex-col">
            <p className="text-xl py-12">Dedication</p>
            <p className="text-sm font-medium">
              Great attitude to work always wins and at Ardilla we are always
              big on positivity and a can do mindset.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
