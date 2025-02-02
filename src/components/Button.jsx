import PropTypes from 'prop-types';

const Button = ({ color, title,custStyles, href = '/' }) => {
  const className = [
    'border',
    'px-8',
    'border-gray-300',
    'font-semibold',
    'py-2.5',
    'rounded-lg',
    'duration-300',
  ];

  switch (color) {
    case 'gray':
      className.push('bg-gray-50', 'hover:bg-gray-200');
      break;
    case 'blue':
      className.push('bg-blue', 'hover:bg-indigo-800', 'text-white');
      break;
    default:
      break;
  }

  return (
    <a href={href} className={`${custStyles} ${className.join(' ')}`}>
      {title}
    </a>
  );
}
export default Button;

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  custStyles: PropTypes.string
};