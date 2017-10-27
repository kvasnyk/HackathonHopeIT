import PropTypes from 'prop-types';
import React from 'react';

const Page = (props) => (
  <div className="page">
    {props.children}
  </div>
);

Page.propTypes = {
  children: PropTypes.element
};

export default Page;