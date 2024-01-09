import { Link } from 'react-router-dom'
import styles from './LinkButton.modules.css'

export default function LinkButton({text, to}){
    return(
        <Link className='btn' to={to}>
            {text}
        </Link>
    )
}