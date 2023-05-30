import React from "react"

const Hiring = () => {
  return (
    <div className="px-24 py-24 font-grotesk bg-gray-100">
      <p className="text-4xl text-primary-300 font-bold">How We Hire</p>

      <div className="mt-16 grid grid-cols-3 gap-6">
        {/* application */}
        <div className="flex flex-col text-primary-300">
          <div className="h-6">
            <img
              src={require("../../assets/Vector (2).png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="text-lg font-semibold">Application</p>
            <p className="text-sm font-normal mt-0.5">
              Send in your applications and if you are a good fit, we will
              schedule an interview.
            </p>
          </div>
        </div>

        {/* interview */}
        <div className="flex flex-col text-primary-300">
          <div className="h-6">
            <img
              src={require("../../assets/clarityEmployeeGroupSolid0.png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="text-lg font-semibold">Hiring Managers Interview</p>
            <p className="text-sm font-normal mt-0.5">
              The interview comprises a chat or two with the hiring manager and
              your department team lead about your suitability and skills for
              the role.
            </p>
          </div>
        </div>

        {/* feedback */}
        <div className="flex flex-col text-primary-300">
          <div className="h-6">
            <img
              src={require("../../assets/Vector (3).png")}
              alt=""
              className="h-full w-auto"
            />
          </div>

          <div className="mt-2">
            <p className="text-lg font-semibold">Feedback</p>
            <p className="text-sm font-normal mt-0.5">
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
