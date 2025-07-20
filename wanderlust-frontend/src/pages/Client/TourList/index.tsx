import { div } from "framer-motion/client"
import TitleBanner from "../../../companents/TitleBanner"
import ToursCard from "../../../companents/ToursCard/indext"
import cardimage2 from "../../../assets/images/cardimage2.jpg"


const TourList = () => {
  return (
    <>
    <div>
      <TitleBanner title="Tour Grid 3 Columns"/>


      <div className="w-[90%] lg:w-[86%] m-auto overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
  <ToursCard turimage={cardimage2} title="Switzerland Hiking The Matterhorn" date="7 Days / 4 Nights" comment="(1 Review)" saleprice="400" costprice={600}/>
</div>

    </div>
    </>
    
   
  )
}

export default TourList