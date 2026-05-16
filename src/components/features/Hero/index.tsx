import styles from "./index.module.css";
import Container from "../../shared/Container";
import Input from "../../shared/Input";
import landingImage from "../../../assets/movie.png";

export default function Hero() {
  return (
    <section>
      <Container className={styles.hero__container}>
        <header className={styles.hero__header}>
          <h1 className={`${styles.title} text-primary`}>Welcome to CMovie</h1>
          <p className={styles.subtitle}>Find your favorite movies with us!</p>
          <Input
            className={styles["hero__search-input"]}
            placeholder="Search for movies..."
          />
        </header>

        <figure className={styles["hero__figure-wave"]} />

        <figure className={styles["hero__img--wrapper"]}>
          <img src={landingImage} alt="Movie" className="img" />
        </figure>
      </Container>
    </section>
  );
}
