import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({ title }) => {
    const onClickMethod = () =>{
        console.log('click')
    }
  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color='green' text='Add' onClick={onClickMethod}/>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker'
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//Css in js, inserire variabile style={headingStyle} dentro h1 per farla funzionare
// const headingStyle = {
//     color:'blue'
// }

export default Header;