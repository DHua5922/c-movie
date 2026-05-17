import Container from "../Container";
import Link from "../Link";
import Logo from "../Logo";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className="slide-in-from-left">
      <Container className={styles.footer__container}>
        <Logo
          containerClassName={styles["footer__img--wrapper"]}
          className={styles["footer__img"]}
        />
        <ul className={styles["footer__link--list"]}>
          {[
            { href: "/", children: "Home" },
            { href: "/movies", children: "Find Movies" },
          ].map((link) => (
            <li key={link.href}>
              <Link to={link.href} variant="secondary" hover>
                {link.children}
              </Link>
            </li>
          ))}
        </ul>
        <hr className={styles.footer__divider} />
        <p className="text-secondary">
          &copy; {new Date().getFullYear()} CMovie. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
