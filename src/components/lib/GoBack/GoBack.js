// GoBack.js

import { Button } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { useRoutes } from 'src/hooks';

function GoBack({ iconSize }) {
  const { router } = useRoutes();

  return (
    <div>
      <Button variant="transparent" onClick={() => router.back()}>
        <div className="text-black">
          <BiArrowBack size={iconSize} />
          <span className="px-2 d-none d-md-inline">Back</span>
        </div>
      </Button>
    </div>
  );
}

GoBack.propTypes = {
  iconSize: PropTypes.number,
};
GoBack.defaultProps = {
  iconSize: 20,
};

export default GoBack;
