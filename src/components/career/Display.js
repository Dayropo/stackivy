const Display = () => {
  return (
    <div className="xl:px-24 sm:px-12 px-6 py-24 bg-white">
      <div className="relative w-5/6 mx-auto">
        <img
          src={require("../../assets/PHOTOS.png")}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Display
