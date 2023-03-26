import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

const AppPhoneInput = forwardRef(function (
  { value, name, onChange, className, componentProps, errors },
  ref
) {
  const props = {
    value,
    name,
    onChange,
    className,
  };

  return (
    <div>
      <PhoneInput ref={ref} {...props} {...componentProps} />
      {errors ? (
        <div className="form-text text-danger">
          {errors[name] ? errors[name].message : null}
        </div>
      ) : null}
    </div>
  );
});

AppPhoneInput.displayName = 'AppPhoneInput';

AppPhoneInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  componentProps: PropTypes.object,
  errors: PropTypes.object,
};
AppPhoneInput.defaultProps = {
  value: null,
  name: undefined,
  onChange: undefined,
  className: undefined,
  componentProps: null,
  errors: null,
};

export default AppPhoneInput;
