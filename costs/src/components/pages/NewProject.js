import styles from "./../NewProject.module.css"
import ProjectForm from "../projects/ProjectForm";

function Projects() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projetos</h1>
      <p>Crie seu projeto para depois adcionar os projetos.</p>
      <ProjectForm />
    </div>
  );
}

export default Projects;
