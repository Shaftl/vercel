import Fancybox from "../../utils/Fancybox";
import Expand from "../Expand";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImg}>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <a data-fancybox="gallery" href="profile2.png">
            <img src="profile2.png" alt="Aliabbas Rahimi" />
            <div className={styles.expand}>
              <Expand />
            </div>
          </a>
        </Fancybox>
      </div>

      <div className={styles.profileText}>
        <h3 className={`heading-secondary  ${styles.profileName}`}>
          Aliabbas Rahimi
        </h3>
        <p>
          Full Stack Developer &
          <br />
          Graphic Designer,
        </p>
      </div>
    </div>
  );
}

export default Profile;
