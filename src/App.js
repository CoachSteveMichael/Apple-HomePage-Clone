import "./styles.css";
import { Hero } from "./components/Hero";
import { Tile } from "./components/Tile";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero
        heading="iPhone 14"
        subheading="Big and bigger"
        background="img/hero1.jpg"
      />
      <Hero
        heading="iPhone 14 Pro"
        subheading="Pro. Beyond."
        background="img/hero2.jpg"
        dark={true}
      />
      <Hero
        heading="Give WOW"
        subheading="This holiday season, find the perfect gift for everyone on your list"
        background="img/hero3.jpg"
        dark={true}
        invert={true}
      />
      <div className="flex">
        <Tile
          heading="iPad"
          subheading="Lovable. Drawable. Magical."
          background="img/heroflex1.jpg"
        />
        <Tile
          heading="AirPods"
          subheading="Share the joy."
          background="img/heroflex2.jpg"
        />
      </div>
      <div className="flex">
        <Tile
          heading=""
          subheading="A healthy leap ahead."
          background="img/heroflex3.jpg"
          logo="img/Applewatchlogo.jpg"
          dark={true}
        />
        <Tile
          heading=""
          subheading="Adventure awaits"
          background="img/heroflex4.jpg"
          logo="img/blacklogo.jpg"
        />
      </div>
      <div className="flex">
        <Tile
          heading="iPad Pro"
          subheading="Supercharged by "
          background="img/heroflex5.jpg"
          subheadingPic="img/M2logo.jpg"
          dark={true}
        />
        <Tile
          heading=""
          subheading="Get up to 3% Daily Cash back with every purchase."
          background="img/heroflex6.jpg"
          logo="img/cardlogo.jpg"
        />
      </div>

      <Footer />
    </div>
  );
}
