import styles from "./index.module.css";
import landingImage from "../../assets/movie.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";

export default function LandingPage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  return (
    <section>
      <Container className="min-full-height">
        <Header
          onSubmit={(event) => {
            event.preventDefault();
            navigate(`/movies?name=${searchInput}`);
          }}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className={styles.hero__header}
        >
          <h1 className={`${styles.title} text-primary`}>Welcome to CMovie</h1>
          <p className={styles.subtitle}>Find your favorite movies with us!</p>
        </Header>

        <figure className={`scale-in ${styles["hero__img--wrapper"]}`}>
          <img src={landingImage} alt="Movie" className="img" />
        </figure>
      </Container>
    </section>
  );
}
