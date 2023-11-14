import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Action, Drama, Romance</h3>
          <p className={styles.hero__description}>
            Explore the thrilling world of Spiderman as he swings through the
            city, battling villains and unraveling secrets.
          </p>
          <button className={styles.hero__button}>Watch Now</button>
        </div>
        <div className={styles.hero__right}></div>
        <img
          className={styles.hero__image}
          src="https://i.pinimg.com/236x/b5/28/23/b5282321fa314fa36c2efd74360c9480.jpg"
          alt="Spiderman Poster"
        />
      </section>
    </div>
  );
}

export default Hero;
