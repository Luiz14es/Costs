import styles from "./Home.module.css";
import saving from "../../img/saving.svg";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <a href="/">Criar projetos</a>
      <img src={saving} alt="Costs" />
    </section>
  );
}

export default Home;
