import Button from "../components/Button";
import Footer from "../components/Footer";
import styles from "./History.module.css";

function History() {
  document.title = "Aliabbas Rahimi | History";

  return (
    <div className={styles.history}>
      <h2 className="heading-secondary">Education</h2>
      <div className={`${styles.historyBox} historyBox`}>
        <div className={styles.historyContainer}>
          <div className={styles.historyItem}>
            <h4 className="title">Field & Knowledge</h4>
            <h3 className={styles.students}>Student</h3>

            {/* <p>Bachelor of Computer Science in Software Engineering</p>
            <a href=""></a>

            <p className={styles.date}>2019 - 2023</p> */}
          </div>

          <div className={styles.historyItem}>
            <h4 className="title">SASS & BOOTSRAP</h4>
            <h3 className={styles.students}>Student</h3>

            <p>
              Course: Advanced CSS and Sass: Flexbox, Grid, Animations and More!
              & Bootstrap 5 From Scratch | Build 5 Modern Websites in Udemy
            </p>

            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/advanced-css-and-sass/?couponCode=KEEPLEARNING"
            />

            <p className={styles.date}>july 2020 - sept 2020</p>
          </div>
          <div className={styles.historyItem}>
            <h4 className="title">
              REACT & <br />
              TAILWIND CSS
            </h4>
            <h3 className={styles.students}>Student</h3>

            <p>
              Course: The Ultimate React Course 2024: React, Next.js, Redux &
              More in Udemy
            </p>

            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/the-ultimate-react-course/?couponCode=KEEPLEARNING"
            />

            <p className={styles.date}>feb 2022 - may 2022</p>
          </div>
          <div className={styles.historyItem}>
            <h4 className="title">
              NODE JS EXPRESS JS
              <br /> & MONGO-DB
            </h4>
            <h3 className={styles.students}>Student</h3>

            <p>
              Course: Node.js, Express, MongoDB & More: The Complete Bootcamp in
              Udemy
            </p>

            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
            />

            <p className={styles.date}>march 2021 - oct 2021</p>
          </div>
          {/*  */}
        </div>

        <div className={styles.line}></div>

        <div className={styles.historyContainer}>
          <div className={styles.historyItem}>
            <h4 className="title">HTML & CSS</h4>
            <h3 className={styles.students}>Student</h3>

            <p>
              Course: Build Responsive Real-World Websites with HTML and CSS in
              Udemy
            </p>

            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?couponCode=KEEPLEARNING"
            />

            <p className={styles.date}>april 2020 - jun 2020</p>
          </div>

          <div className={styles.historyItem}>
            <h4 className="title">JAVASCRIPT</h4>
            <h3 className={styles.students}>Student</h3>

            <p>
              Course: The Complete JavaScript Course 2024: From Zero to Expert!
              in Udemy
            </p>

            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=KEEPLEARNING"
            />

            <p className={styles.date}>octobar 2020 - december 2020</p>
          </div>

          <div className={styles.historyItem}>
            <h4 className="title">NEXT JS</h4>
            <h3 className={styles.students}>Student</h3>
            Course in Udemy :
            <p>
              Course: Next.js From Scratch 2024 & The Ultimate React Course
              2024: React, Next.js, in Udemy
            </p>
            <Button
              text="Visit Course"
              type="link"
              link="contact"
              address="https://www.udemy.com/course/nextjs-from-scratch/?couponCode=KEEPLEARNING"
            />
            <p className={styles.date}>july 2022 - november 2022</p>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <Footer />
    </div>
  );
}

export default History;
