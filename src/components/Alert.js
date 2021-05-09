import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  // eslint-disable-next-line react/require-default-props
  message: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  success: PropTypes.bool,
};
