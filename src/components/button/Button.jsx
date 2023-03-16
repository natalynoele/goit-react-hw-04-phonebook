import PropTypes from 'prop-types';
import Btn from './Button_Style';
import React from 'react';

const Button = ({ type, clickBtn, id = null, children }) => { 
  return (
    <Btn type={type} onClick={() => clickBtn(id)}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired, 
  handleEvent: PropTypes.func,
};

export default Button;
