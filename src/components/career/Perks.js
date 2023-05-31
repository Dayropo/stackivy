import { perks } from "../../utils/data"

const Perks = () => {
  return (
    <div className="w-full sm:bg-primary-200 bg-gray-100">
      <div className="sm:py-20 py-12 lg:w-1/2 sm:w-3/5 w-5/6 mx-auto font-grotesk sm:text-white text-primary-300">
        <p className="lg:text-3xl sm:text-2xl text-xl font-light text-center">
          Beyond a competitive salary, we offer so much more in support and
          necessary tools needed to get the best results.
        </p>
      </div>

      <p className="text-center sm:text-white text-primary-300 sm:text-2xl text-xl font-grotesk font-semibold sm:rotate-6 lg:-mb-10 sm:-mb-6">
        Perks
      </p>

      <div className="bg-no-repeat sm:bg-perks bg-cover w-full grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-x-3 gap-y-6 lg:px-36 sm:px-24 px-8 sm:pt-40 sm:pb-20 py-12">
        {perks.map(item => (
          <div key={item.id} className="flex flex-col text-primary-300">
            <div className="h-6">
              <img src={item.icon} alt="" className="h-full w-auto" />
            </div>

            <div className="mt-2">
              <p className="sm:text-lg text-base font-semibold">{item.title}</p>
              <p className="sm:text-sm text-xs font-normal">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Perks
