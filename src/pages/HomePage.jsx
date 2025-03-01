// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../components/Button";
import styles from "./HomePage.module.css";
import Star from "../components/Star";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import Swiper styles

function HomePage() {
  document.title = "Aliabbas Rahimi | Home";

  return (
    <div>
      <div className={`${styles.hero} hero`}>
        <div>
          <h1 className="heading-primary">
            Navigate My Amazing
            <br /> Journy
          </h1>

          <p>
            <code>I build web interfaces.</code>
          </p>
          <Link to="/portfolio">
            <Button text="Exlpore now" />
          </Link>
        </div>
        <div className={`${styles.counterBox} counterBox`}>
          <h3 className="heading-tertairy">
            <span>3+</span> Years Experience
          </h3>
          <h3 className="heading-tertairy">
            <span>50+</span> Completed Projects
          </h3>

          <h3 className="heading-tertairy">
            <span>43+</span>
            Happy Customers
          </h3>
        </div>
      </div>

      <div className={styles.services}>
        <h2 className="heading-secondary" style={{ marginBottom: "2.4rem" }}>
          My Services
        </h2>
        <div className={`${styles.servicesBox} servicesBox`}>
          <div className={styles.servicesBoxItem}>
            <h4 className="title">Web Development</h4>
            <p>
              Unlock your online potential with our comprehensive web
              development services! We specialize in creating custom,
              user-friendly websites that look stunning. We experienced
              developers utilizes the latest technologies and best practices to
              build responsive, high-performance websites tailored to your
              unique business needs.
            </p>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button text="Order Now" type="link" />
            </Link>
          </div>
          <div className={styles.servicesBoxItem}>
            <h4 className="title">UX/UI Design</h4>
            <p>
              Transform your digital experiences with our expert UX/UI design
              services! We dedicated to crafting intuitive, engaging, and
              visually stunning interfaces that not only captivate users but
              also drive results. We believe that great design goes beyond
              aesthetics; it’s about understanding user needs and creating
              seamless interactions.
            </p>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button text="Order Now" type="link" />
            </Link>
          </div>
          <div className={styles.servicesBoxItem}>
            <h4 className="title">Graphic Design</h4>
            <p>
              Elevate your brand with our comprehensive graphic design services!
              Our talented team of designers is committed to bringing your
              vision to life through creative and impactful visual solutions.
              Whether you need a fresh logo, eye-catching marketing materials,
              or stunning digital graphics, we tailor our approach to meet your
              unique needs.
            </p>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button text="Order Now" type="link" />
            </Link>
          </div>

          <div className={styles.servicesBoxItem}>
            <h4 className="title">Photography</h4>
            <p>
              Capture the essence of your moments with our professional
              photography services! Our skilled photographers specialize in a
              variety of styles, ensuring that every shot reflects your unique
              story and vision. Whether you need stunning portraits, dynamic
              event coverage, or captivating product photography, we are
              dedicated to delivering high-quality images that leave a lasting
              impression.
            </p>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button text="Order Now" type="link" />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <p
              className="heading-tertairy"
              style={{
                textAlign: "center",
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              No more available
            </p>
            <div
              className={styles.servicesBoxItem}
              style={{
                opacity: 0.4,
                filter: "blur(2px)",
                pointerEvents: "none",
              }}
            >
              <h4 className="title">Face painter</h4>
              <p>
                Transform your event into a vibrant celebration with our
                professional face painting services! Our talented artists
                specialize in creating stunning, imaginative designs that
                delight both children and adults alike. Whether it’s a birthday
                party, festival, corporate event, or any special occasion, we
                bring creativity and joy to every face we paint.
              </p>

              {/* <Link to='/contac style={{textDecoration: 'none'}}t'>
              <Button text="Order Now" type="link" /></Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.testimonial} testimonial`}>
        <h2 className="heading-secondary" style={{ marginBottom: "2.4rem" }}>
          Recommendations
        </h2>

        <Swiper
          // install Swiper modules
          breakpoints={{
            800: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={styles.testimonialCard}>
              <h4 className="title">Karim Ahmadi</h4>
              <p>
                I had the pleasure of working with Aliabbas Rahimi on my
                website redesign, and I couldn&apos;t be happier with the
                results! From our initial consultation, they took the time to
                understand my vision and goals, offering valuable insights that
                truly enhanced the project.
              </p>
              <img src="/review (1).jpg" alt="" />
              <Star rating="5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialCard}>
              <h4 className="title">Hannah Smith</h4>

              <p>
                I highly recommend Aliabbas Rahimi to anyone looking for a
                talented and dedicated web developer. They exceeded my
                expectations and made the entire experience enjoyable. Thank you
                for bringing my vision to life!
              </p>
              <img src="/review (3).jpg" alt="" />

              <Star rating="5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialCard}>
              <h4 className="title">Bob Roberts</h4>

              <p>
                Our experience with Aliabbas Rahimi was fantastic! They took
                our complex ideas and turned them into a sleek, functional
                website that impresses our clients. Their professionalism and
                attention to detail made the collaboration seamless. I look
                forward to working together again!
              </p>
              <img src="/review (2).jpg" alt="" />

              <Star rating="4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
