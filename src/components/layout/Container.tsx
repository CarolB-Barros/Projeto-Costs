import PropTypes from  'prop-types'
import './Container.css'

function Container(props) {
    return(
        <div className={`${[props.customClass]} container`}  >{props.children}</div>
    )
}

export default Container