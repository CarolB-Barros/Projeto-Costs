import { Link } from 'react-router-dom'
import './LinkButton.css'

function LinkButton({ to, text }) {
    return(
        <Link className='btn' to={to}>{text}</Link>

    )
}

export default LinkButton