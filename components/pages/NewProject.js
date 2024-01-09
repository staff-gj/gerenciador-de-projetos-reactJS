import Container from "../layout/Container";
import NavBar from "../layout/NavBar";
import ProjectForm from "../project/ProjectForm";
import styles from './NewProject.modules.css'

export default function NewProject(){
    return(
        <div>
            <NavBar/>
                <div className={"newproject_container"}>
                    <h1>Criar Projeto</h1>
                    <p>Crie seu projeto para depois adicionar os serviços</p>
                    <ProjectForm/>
                </div>
        </div>
    )
}