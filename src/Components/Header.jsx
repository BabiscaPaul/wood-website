import PropTypes from 'prop-types';

function Header({children}) {
    return (
        <header>
            {children}
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired, //anything that can be rendered (numbers, strings, elements, array)
};

export default Header;