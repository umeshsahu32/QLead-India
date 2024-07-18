import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BtnLink = ({ path, text }) => {
  return (
    <Fragment>
      <Link to={path}>{text}</Link>
    </Fragment>
  );
};

export default BtnLink;
