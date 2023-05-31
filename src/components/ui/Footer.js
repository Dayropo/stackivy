import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className=" text-white font-grotesk bg-white w-full">
      {/* download */}
      <div className="w-full md:w-3/4 lg:w-3/5 md:rounded-xl md:mx-auto pt-10 lg:px-16 sm:px-12 px-8 md:-mb-24 relative bg-footer bg-cover bg-no-repeat bg-primary-300 flex">
        <div className="w-1/2 sm:space-y-6 space-y-2 ">
          <p className="lg:text-2xl sm:text-xl text-lg font-bold w-4/5">
            Download for free Start saving Today
          </p>
          <button className="sm:text-sm text-xs font-medium text-primary-300 bg-white rounded-md py-2.5 px-4">
            Download for free
          </button>
        </div>

        <div className="w-1/2 flex">
          <img
            src={require("../../assets/image 53.png")}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* main footer */}
      <div className="xl:px-24 sm:px-12 px-6 md:pt-24 pt-6 space-y-4 bg-primary-100">
        {/* footer links */}
        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 lg:gap-0 gap-y-6 gap-x-2.5 sm:text-sm text-xs cursor-default mt-8">
          <ul className="space-y-1.5">
            <li className="font-bold mb-2.5">Products</li>
            <li>Savings</li>
            <li>Dilla</li>
            <li>Financial Coach</li>
            <li>Halal</li>
            <li>Budgetting</li>
            <li>Investment</li>
            <li>Insurance</li>
          </ul>

          <ul className="space-y-1.5">
            <li className="font-bold mb-2.5">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>FAQS</li>
            <li>Press</li>
          </ul>

          <ul className="space-y-1.5">
            <li className="font-bold mb-2.5">Transparency</li>
            <li>Terms & conditions</li>
            <li>Information security policy</li>
            <li>Privacy policy</li>
            <li>Interest Tool</li>
          </ul>

          <ul className="space-y-1.5">
            <li className="font-bold mb-2.5">Developer</li>
            <li>Connect API</li>
          </ul>

          <ul className="space-y-1.5">
            <li className="font-bold mb-2.5">Address</li>
            <li>33B, Ogundana street, Allen, Ikeja.</li>

            {/* contact */}
            <li className="font-bold mb-2.5">Contact</li>
            <li>support@ardilla.africa</li>
            <li>(234)801 000 1234</li>
          </ul>
        </div>

        <div className="h-0.5 w-full bg-gray-300"></div>

        {/* copyright */}
        <div>
          <div className="flex items-center justify-between">
            <div className="sm:text-sm text-xs font-medium">
              <p>&copy; 2022 Ardilla. All right reserved</p>
            </div>

            <div className="flex items-center space-x-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 cursor-pointer border border-white rounded-full p-1.5 flex items-center justify-center"
              >
                <FaInstagram color="white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 cursor-pointer border border-white rounded-full p-1.5 flex items-center justify-center"
              >
                <FaFacebookF color="white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 cursor-pointer border border-white rounded-full p-1.5 flex items-center justify-center"
              >
                <FaLinkedinIn color="white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 cursor-pointer border border-white rounded-full p-1.5 flex items-center justify-center"
              >
                <FaTwitter color="white" />
              </a>
            </div>
          </div>

          <div className="py-2">
            <p className="sm:text-sm text-xs">
              Ardilla operates under the coorperative license of Ardilla
              Multipurpose Cooperative Society, LSC 18245, We provide Savings
              and Fixed deposit services to our users
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
