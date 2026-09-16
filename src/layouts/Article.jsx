import ArticleCard from "../components/ArticleCard"
import Container from "../components/Container"
import Heading from "../components/Heading"
import ArticleImageOne from '../assets/article1.png'
import ArticleImageTwo from '../assets/article2.png'
import ArticleImageThree from '../assets/article3.png'
import ArticleImageFour from '../assets/article4 (1).png'
import ArticleImageFive from '../assets/article4 (2).png'
import ArticleImageSix from '../assets/article4 (3).png'


const Article = () => {
  return (
    <section className="pt-[110px] py-[90px] bg-[#F3F3F3]">
        <Container>
            <Heading text= "Recent News & Articles" className= 'text-center' />
            <div className="mt-[60px] grid grid-cols-3 gap-6">
              <ArticleCard src= {ArticleImageOne} heading = "Where Should I Buy Next?" writer = "Carter Rosser" date = "24/08/2021" text ="From romantic getaways to adventurous hikes, find your next..." src2={ArticleImageFour} />
              <ArticleCard src= {ArticleImageTwo} heading = "Malesuada Fermentum Tortor" writer = "Carter Rosser" date = "24/08/2021" text ="From romantic getaways to adventurous hikes, find your next..." src2={ArticleImageFive} />
              <ArticleCard src= {ArticleImageThree} heading = "Magna Malesuada" writer = "Carter Rosser" date = "24/08/2021" text ="From romantic getaways to adventurous hikes, find your next..." src2={ArticleImageSix} />
                
            </div>


        </Container>
    </section>
  )
}

export default Article