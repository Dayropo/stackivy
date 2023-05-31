import React from "react"

const Hiring = () => {
  return (
    <div className="xl:px-24 sm:px-12 px-6 py-24 font-grotesk bg-gray-100">
      <p className="lg:text-4xl sm:text-3xl text-2xl text-primary-300 font-bold">
        How We Hire
      </p>

      <div className="mt-16 grid sm:grid-cols-3 grid-cols-1 gap-6">
        {/* application */}
        <div className="flex flex-col text-primary-300 sm:w-full w-4/5 mx-auto">
          <div className="h-6">
            <img
              src={require("../../assets/Vector (2).png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="lg:text-lg text-base font-semibold">Application</p>
            <p className="lg:text-sm text-xs font-normal mt-0.5">
              Send in your applications and if you are a good fit, we will
              schedule an interview.
            </p>
          </div>
        </div>

        {/* interview */}
        <div className="flex flex-col text-primary-300 sm:w-full w-4/5 mx-auto">
          <div className="h-6">
            <img
              src={require("../../assets/clarityEmployeeGroupSolid0.png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="lg:text-lg text-base font-semibold">
              Hiring Managers Interview
            </p>
            <p className="lg:text-sm text-xs font-normal mt-0.5">
              The interview comprises a chat or two with the hiring manager and
              your department team lead about your suitability and skills for
              the role.
            </p>
          </div>
        </div>

        {/* feedback */}
        <div className="flex flex-col text-primary-300 sm:w-full w-4/5 mx-auto">
          <div className="h-6">
            <img
              src={require("../../assets/Vector (3).png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="lg:text-lg text-base font-semibold">Feedback</p>
            <p className="lg:text-sm text-xs font-normal mt-0.5">
              When the process is complete, we give you feedback on your
              performance and we let you know if you have been selected.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiring
