// SignOut.js

import { Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { useSignOut } from 'src/hooks';

function SignOut({ iconSize }) {
  const handleSignOut = useSignOut();

  return (
    <div>
      <Button variant="transparent" onClick={handleSignOut}>
        <div className="text-danger">
          <FaSignOutAlt size={iconSize} />
          <span className="px-2 d-inline">Sign Out</span>
        </div>
      </Button>
    </div>
  );
}

SignOut.propTypes = {
  iconSize: PropTypes.number,
};
SignOut.defaultProps = {
  iconSize: 20,
};

export default SignOut;
