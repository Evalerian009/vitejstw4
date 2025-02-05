import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ color, title,custStyles, href = '/', isMobile, setIsActive }) => {
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
    <Link to={href} className={`${custStyles} ${className.join(' ')}`} onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      if (isMobile) setIsActive(false); // Close mobile menu if open
  }}>
      {title}
    </Link>
  );
}
export default Button;

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  custStyles: PropTypes.string,
  isMobile: PropTypes.bool,
  setIsActive: PropTypes.func
};