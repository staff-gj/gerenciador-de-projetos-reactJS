import { Link } from 'react-router-dom'
import styles from '../layout/NavBar.modules.css'
import logo from '../../img/costs_logo.png'
import Container from './Container'
import Footer from './Footer'

export default function NavBar(props){
    return(
        <div>
        <nav className='navbar'>
            <ul className={'container'}>
                <Link to={'/'}>
                    <img src={logo} alt="Fundo" />
                </Link>
                <ul className='list'>
                    <li className='item'>
                    <Link to={"/home"}>Home</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/company"}>Empresa</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/contact"}>Contato</Link>
                    </li>
                    <li className='item'>
                    <Link to={"/projects"}>Projetos</Link>  
                    </li>
                </ul>
            </ul>
        </nav>
        <Footer/>
        </div>
    )
}