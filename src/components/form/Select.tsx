import './Select.css'
import PropTypes, { InferProps } from  'prop-types'

type SelectProps = {
    text: string;
    name: string;
    options: {
        name: string,
        id: string
    }[];
    handleOnChange: string;
    value: string;
  };

function Select({ text, name, options, handleOnChange, value }: SelectProps) {
    return (
        <div className='form_control'>
            <label htmlFor={name}>{text}:</label>
            <select name={name}
            id={name}
            onChange={handleOnChange}
            value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                  <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select