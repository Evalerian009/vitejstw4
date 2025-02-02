import PropTypes from 'prop-types';

const Title = ({smHeader, lgheader, txt}) => {
  return (
    <div className="text-center">
        <h2 className="text-blue text-lg font-semibold">{smHeader}</h2>
        <h3 className="fade text-[1.75rem] font-semibold md:font-normal md:text-[2rem] lg:text-[2.75rem] md:mt-2 text-gray-600">{lgheader}</h3>

        {txt && <p className="mt-3 w-[90%] mx-auto text-center text-gray-700 text-[1.15rem]">{txt}</p>}
    </div>
  )
}

export default Title

Title.propTypes = {
    smHeader: PropTypes.string,
    lgheader: PropTypes.string.isRequired,
    txt: PropTypes.string
};