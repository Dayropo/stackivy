import Culture from "../components/career/Culture"
import Display from "../components/career/Display"
import Header from "../components/career/Header"
import Hiring from "../components/career/Hiring"
import People from "../components/career/People"
import Perks from "../components/career/Perks"
import Positions from "../components/career/Positions"
import Values from "../components/career/Values"
import Footer from "../components/ui/Footer"

const Career = () => {
  return (
    <>
      <Header />
      <Culture />
      <Values />
      <People />
      <Perks />
      <Positions />
      <Hiring />
      <Display />
      <Footer />
    </>
  )
}

export default Career
