import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.modules.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li> <FaFacebook/> </li>
                <li> <FaInstagram/> </li>
                <li> <FaLinkedin/> </li>
            </ul>
            <p><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}