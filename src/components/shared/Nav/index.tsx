import styles from "./index.module.css";
import Container from "../Container";
import Logo from "../Logo";
import Link from "../Link";

export default function Nav() {
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
      </Container>
    </nav>
  );
}
