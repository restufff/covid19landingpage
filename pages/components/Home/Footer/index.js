import Logo from "@public/Logo.svg";
import fb from "@public/fb.png";
import yt from "@public/yt.png";
import vine from "@public/vine.png";
import twt from "@public/twitter.png";
import styles from "./footer.module.css";

const footerList = [
  {
    label: "Overview",
    url: "/about",
  },
  {
    label: "Symptoms",
    url: "/features",
  },
  {
    label: "Prevention",
    url: "/pricing",
  },
  {
    label: "Treatment",
    url: "/testimonials",
  },
];

const socialMedia = [fb, yt, vine, twt];

const Footer = () => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuContainer}>
        <div className={styles.logoFooter}>
          <img src={Logo} />
        </div>
        <div className={styles.footerPath}>
          {footerList.map((obj, index) => (
            <a key={index} href={obj.url}>
              {obj.label}
            </a>
          ))}
        </div>
        <div className={styles.socialmediaWrapper}>
          {socialMedia.map((obj, index) => (
            <img key={index} src={obj} />
          ))}
        </div>
      </div>
      <p>2020 @ All rights reserved by pixelspark.co</p>
    </div>
  );
};

export default Footer;
