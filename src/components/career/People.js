import { people } from "../../utils/data"

const People = () => {
  return (
    <div className="bg-white xl:px-24 sm:px-12 px-6 py-16 font-grotesk cursor-default w-full">
      <p className="lg:text-4xl sm:text-3xl text-2xl text-primary-300 font-bold">
        People are what matters
      </p>

      <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-4 gap-6 mt-16">
        {people.map(item => (
          <div className="flex sm:flex-row flex-col" key={item.id}>
            <div className="sm:w-2/5 w-3/5 relative">
              <img
                src={item.image}
                alt=""
                className="w-full h-auto rounded-xl opacity-90"
              />

              <img
                src={require("../../assets/PLAY.png")}
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              />

              <div className="absolute bottom-0 lg:mb-2.5 mb-1.5 lg:px-4 px-2.5 z-10 text-white">
                <p className="lg:text-lg text-base font-semibold">
                  {item.name}
                </p>
                <p className="lg:text-sm text-xs font-normal">
                  {item.position}
                </p>
              </div>
            </div>

            <div className="sm:pl-4 sm:w-3/5 w-full mt-2.5">
              <p className="text-gray-400 lg:text-sm text-xs font-medium">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default People
