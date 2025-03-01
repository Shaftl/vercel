import Button from "../components/Button";
import Expand from "../components/Expand";
import Footer from "../components/Footer";
import Fancybox from "../utils/Fancybox";
import styles from "./Portfolio.module.css";

const imgSrc = [
  {
    img: "omnifood.png",
    title: "Omnifood.dev",
    message: "A responsive food website using Html, Css",
    link: "https://omnifood.dev/",
  },
  {
    img: "work-2.jpg",
    title: "World Wise",
    message: "A responsive food website using Html, css",
    link: "https://worldwise-jonas.netlify.app/",
  },

  {
    img: "work-6.jpg",
    title: "The Wild Oasis v1",
    link: "https://the-wild-oasis.vercel.app/dashboard",
  },
  {
    img: "work-7.jpg",
    title: "The Wild Oasis v2",
    link: "https://the-wild-oasis-website.vercel.app/",
  },
  {
    img: "work-5.jpg",
    title: "Forkify",
    link: "https://forkify-v2.netlify.app/",
  },

  {
    img: "work-8.jpg",
    title: "UsePopcorn",
    link: "https://usepopcorn-but-better.netlify.app/",
  },
  {
    img: "work-1.jpg",
    title: "Bankist Website",
    message: "A simple bankist project Using Html, Css & Javascript",
    link: "https://bankist-dom.netlify.app/",
  },
  {
    img: "work-4.jpg",
    title: "Pig Game",
    message: "Pig game which is very fun using Html, Css, Javascript See more",
    link: "https://pig-game-v2.netlify.app/",
  },
];

function Portfolio() {
  document.title = "Aliabbas Rahimi | Portfolio";

  return (
    <div className={styles.portfolio}>
      <h2 className="heading-secondary">About my Project</h2>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className={`${styles.portfolioBox} portfolioBox`}>
          {imgSrc.map((item, index) => {
            return (
              <div className={styles.portfolioItem} key={index}>
                <a data-fancybox="gallery" href={item.img}>
                  <img
                    src={item.img}
                    className={`${styles.portfolioImg} work-${index + 1}`}
                    alt={item.img}
                  />
                  <div className={styles.expand}>
                    <Expand />
                  </div>
                </a>

                <div className={styles.portfolioContent}>
                  <h3 className={`${styles.portfolioTitle} heading-tertairy`}>
                    {item.title}
                  </h3>
                  <Button
                    type="link"
                    text="View Live"
                    address={item.link}
                    link="portfolio"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Fancybox>

      <Footer />
    </div>
  );
}

export default Portfolio;
