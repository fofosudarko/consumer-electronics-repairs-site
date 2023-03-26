// NewHOC.js

import React from 'react';

function NewHOC(PassedComponent) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default NewHOC;
