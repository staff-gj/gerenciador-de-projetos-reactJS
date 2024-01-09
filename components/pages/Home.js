import Container from "../layout/Container";
import NavBar from "../layout/NavBar";
import styles from './Home.modules.css'
import savings from '../../img/savings.svg'
import LinkButton from "../layout/LinkButton";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <section className="home_container">
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar seus projetos agora mesmo!</p>
                <LinkButton to={'/newproject'} text={'Criar Projeto'}/>
                <img src={savings} alt="Savings" />
            </section>
        </div>

    );
}
