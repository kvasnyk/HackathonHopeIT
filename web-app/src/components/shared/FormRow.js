import React from 'react';

const FormRow = (props) => (
  <div className="form-row">
    <div className="form-label">
      {props.children[0]}
    </div>
    <div className="form-content">
      {props.children[1]}
    </div>
    <br className="clear-fix" />
  </div>
);

export default FormRow;