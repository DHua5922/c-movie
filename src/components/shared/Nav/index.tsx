import styles from "./index.module.css";
import Container from "../Container";
import Logo from "../Logo";
import Link from "../Link";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "../Modal";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav>
      <Container className={styles["nav__row"]}>
        <Logo
          containerClassName={`slide-in-from-left ${styles["nav__logo--wrapper"]}`}
        />

        <ul className={styles["nav__link--list"]}>
          <li>
            <Link to="/" hover>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="btn btn-primary">
              Find Movies
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setShowMenu(true)}
          className={styles["nav__hamburger--button"]}
        >
          <RxHamburgerMenu className={styles.nav__hamburger} />
        </button>
      </Container>

      <Modal show={showMenu} onHide={() => setShowMenu(false)}>
        <div className={styles["modal__link--list"]}>
          {[
            { children: "Home", to: "/" },
            { children: "Find Movies", to: "/movies" },
          ].map((link) => (
            <button
              key={link.children}
              onClick={() => {
                navigate(link.to);
                setShowMenu(false);
              }}
              className={styles["modal__link--button"]}
            >
              {link.children}
            </button>
          ))}
        </div>
      </Modal>
    </nav>
  );
}
