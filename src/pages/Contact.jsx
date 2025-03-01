import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.css";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoadin] = useState(false);
  const [isGoing, setIsGoing] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return toast.error("Please fill all the fields!", {
        style: {
          padding: "10px",
          fontSize: "1.2rem",
          background: "var(--bg-dark-5)",
          color: "#fff",
        },
        iconTheme: {
          primary: "var(--primary-color)",
          secondary: "var(--bg-dark)",
        },
      });
    }

    const validateEmail = (emailP) => {
      const regex =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      return regex.test(emailP);
    };
    // if (validateEmail(email)) {
    if (isGoing) {


      setIsLoadin(true);
      // email is valid
      emailjs
        .sendForm("service_qurmytv", "template_kv99vx9", form.current, {
          publicKey: "h35AqdJlUNF9dDGV-",
        })
        .then(
          () => {
            setIsLoadin(false);
            setName("");
            setEmail("");
            setMessage("");

            toast.success("Successfully Message Send!", {
              style: {
                padding: "10px",
                fontSize: "1.2rem",
                background: "var(--bg-dark-5)",
                color: "#fff",
              },
              iconTheme: {
                primary: "var(--primary-color)",
                secondary: "var(--bg-dark)",
              },
            });
          },
          (error) => {
            setIsLoadin(true);

            toast.error(`Something went wrong ${error}`, {
              style: {
                padding: "10px",
                fontSize: "1.2rem",
                background: "var(--bg-dark-5)",
                color: "#fff",
              },
              iconTheme: {
                primary: "var(--primary-color)",
                secondary: "var(--bg-dark)",
              },
            });
          }
        );
    } else {
      // email is invalid
      // return toast.error("The email is incorrect!", {
      return toast.error("Something went wrong ", {
        style: {
          padding: "10px",
          fontSize: "1.2rem",
          background: "var(--bg-dark-5)",
          color: "#fff",
        },
        iconTheme: {
          primary: "var(--primary-color)",
          secondary: "var(--bg-dark)",
        },
      });
    }
  };

  document.title = "Aliabbas Rahimi | Contact";

  return (
    <div className={styles.contact}>
      <h2>Contact information</h2>

      <div className={styles.contactBox}>
        <div className={styles.contactCart}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Country: </span>UK
          </p>
          {/* <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Email: </span>rafiullahmasood007@gmil.com
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Phone: </span>(+1) 5713254625
          </p> */}
        </div>
      </div>

      <h2 className="heading-secondary">Get in touch </h2>
      <Toaster />
      <div className={styles.form}>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">
              <i className="fa fa-user" aria-hidden="true"></i>
            </label>

            <input
              type="text"
              name="user_name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className={styles.messageBox}>
            <div className={styles.blankBox}>
              <label htmlFor="message">
                <i className="fa fa-comment" aria-hidden="true"></i>
              </label>
            </div>

            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message to Us"
            />
          </div>
          <div>
            <Button text={isLoading ? "Sending..." : "Send Message"}>{}</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
