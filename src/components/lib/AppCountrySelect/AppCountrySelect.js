import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown } from 'react-country-region-selector';

const AppCountrySelect = forwardRef(function (
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
      <CountryDropdown ref={ref} {...props} {...componentProps} />
      {errors ? (
        <div className="form-text text-danger">
          {errors[name] ? errors[name].message : null}
        </div>
      ) : null}
    </div>
  );
});

AppCountrySelect.displayName = 'AppCountrySelect';

AppCountrySelect.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  componentProps: PropTypes.object,
  errors: PropTypes.object,
};
AppCountrySelect.defaultProps = {
  value: null,
  name: undefined,
  onChange: undefined,
  className: undefined,
  componentProps: null,
  errors: null,
};

export default AppCountrySelect;
