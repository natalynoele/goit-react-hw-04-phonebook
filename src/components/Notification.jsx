import PropTypes from 'prop-types';
import capitalizeFirstLetter from 'functions/capitalizeFirstLetter';
const Notification = ({ message }) => {
  return <p>{capitalizeFirstLetter(message)}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
