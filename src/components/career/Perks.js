import { perks } from "../../utils/data"

const Perks = () => {
  return (
    <div className="min-h-screen bg-primary-200">
      <div className="py-20 w-1/2 mx-auto font-grotesk text-white">
        <p className="text-3xl font-regular text-center">
          Beyond a competitive salary, we offer so much more in support and
          necessary tools needed to get the best results.
        </p>
      </div>

      <div className="bg-no-repeat bg-perks bg-cover w-full grid grid-cols-3 gap-6 px-36 pt-40 pb-20">
        {perks.map(item => (
          <div key={item.id} className="flex flex-col text-primary-300">
            <div className="h-6">
              <img src={item.icon} alt="" className="h-full w-auto" />
            </div>

            <div className="mt-2">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm font-normal">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perks
