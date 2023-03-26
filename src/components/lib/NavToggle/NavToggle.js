// NavToggle.js

import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Offcanvas } from 'react-bootstrap';

import { NavButton } from 'src/components/lib';

function NavToggle({ children }) {
  const [showNav, setShowNav] = useState(false);

  const handleShowNavServiceTypes = useCallback(() => {
    setShowNav((state) => !state);
  }, []);

  return (
    <div className="d-block d-lg-none mb-3 mb-lg-0">
      <NavButton
        onClick={handleShowNavServiceTypes}
        variant="light"
        textColor="black"
      />
      <Offcanvas show={showNav} onHide={handleShowNavServiceTypes}>
        <Offcanvas.Header className="nav-area" closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="nav-area">
          <div onClick={handleShowNavServiceTypes}>{children}</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

NavToggle.propTypes = {
  children: PropTypes.node,
};
NavToggle.defaultProps = {
  children: null,
};

export default NavToggle;
