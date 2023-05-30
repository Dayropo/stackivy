import { people } from "../../utils/data"

const People = () => {
  return (
    <div className="min-h-screen bg-white px-24 py-16 font-grotesk cursor-default">
      <p className="text-4xl text-primary-300 font-bold">
        People are what matters
      </p>

      <div className="grid grid-cols-2 gap-8 mt-16">
        {people.map(item => (
          <div className="flex" key={item.id}>
            <div className="w-2/5 relative">
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

              <div className="absolute bottom-0 mb-2.5 px-4 z-10 text-white">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm font-normal">{item.position}</p>
              </div>
            </div>

            <div className="pl-4 w-3/5 mt-2.5">
              <p className="text-gray-400 text-sm font-medium">
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
