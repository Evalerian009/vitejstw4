import PropTypes from 'prop-types';

export const InputField = ({name,type,custStyles,placeholder,title}) => {
  return (
    <label  className={`${custStyles}`}>
        <span className='block text-sm font-semibold capitalize text-gray-600'>{title}</span>
        <input className={`border py-2 mt-2 rounded-lg border-gray-300 indent-3 w-full outline-none text-gray-600`} name={name} type={type} placeholder={placeholder} />
    </label>
  )
}

export const SelectField = ({name,custStyles,title, optionsList}) => {
    return (
        <label className={`${custStyles}`}>
            <span className='block text-sm font-semibold capitalize text-gray-600'>{title}</span>
            <select className={`border  py-2 mt-2 rounded-lg border-gray-300 indent-2 outline-none w-full capitalize text-gray-600`} name={name}>
              {optionsList.map(option=>((
                <option key={option}>{option}</option>
              )))}
            </select>
        </label>
        )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    custStyles: PropTypes.string,
    placeholder: PropTypes.string
}

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    custStyles: PropTypes.string,
    optionsList: PropTypes.arrayOf(PropTypes.string).isRequired
}