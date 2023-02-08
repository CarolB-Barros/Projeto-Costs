import './SubmitButton.css'
import PropTypes, { InferProps } from  'prop-types'

type SubmitProps = {
    text: string;

  };

function SubmitButton({ text }: SubmitProps) {
    return (
        <div>
            <button className='btn'>{text}</button>
        </div>
    )
}

export default SubmitButton