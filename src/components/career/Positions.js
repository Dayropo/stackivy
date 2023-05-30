const Positions = () => {
  return (
    <div className="min-h-screen font-grotesk px-24 py-16">
      <p className="text-4xl text-primary-300 font-bold">Open Positions</p>

      <div className="mt-16 grid grid-cols-2 gap-6">
        <div className="p-8 bg-pos-blue rounded-md space-y-6 bg-no-repeat bg-posBlue bg-center">
          <p className="text-2xl font-bold">Design</p>
          <p className="text-sm">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold">Position Closed</p>
        </div>

        <div className="p-8 bg-pos-green rounded-md space-y-6 bg-no-repeat bg-posGreen bg-center">
          <p className="text-2xl font-bold">Engineering</p>
          <p className="text-sm">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold">Position Closed</p>
        </div>

        <div className="p-8 bg-pos-yellow rounded-md space-y-6 bg-no-repeat bg-posYellow bg-center">
          <p className="text-2xl font-bold">Content Writer</p>
          <p className="text-sm">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold">Position Closed</p>
        </div>

        <div className="p-8 bg-pos-red rounded-md space-y-6 bg-no-repeat bg-posRed bg-center">
          <p className="text-2xl font-bold">Financial Advisor</p>
          <p className="text-sm">
            Oh no...Position currently filled, check back later! To make sure
            you don&apos;t miss any update subscribe to our newsletter.
          </p>
          <p className="font-bold">Position Closed</p>
        </div>
      </div>
    </div>
  )
}

export default Positions
