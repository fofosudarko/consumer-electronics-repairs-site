import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-clock/dist/Clock.css';

const AppDateTimePicker = forwardRef(function (
  { value, name, onChange, className, componentProps },
  ref
) {
  const regex = /\d{4}[-/]{1}\d{2}[-/]{1}\d{2}|\d{2}[:]{1}\d{2}[:]{1}\d{2}/;
  const valueRef = useRef();

  if (value instanceof Date) {
    valueRef.current = value;
  } else if (typeof value === 'string') {
    if (regex.test(value)) {
      value = new Date(value);
      valueRef.current = value;
    } else {
      if (valueRef.current instanceof Date) {
        value = valueRef.current;
      } else {
        value = undefined;
      }
    }
  }

  const props = {
    value,
    name,
    onChange,
    className,
  };

  return (
    <DateTimePicker
      ref={ref}
      {...props}
      {...componentProps}
      format="y-MM-dd h:mm a"
    />
  );
});

AppDateTimePicker.displayName = 'AppDateTimePicker';

AppDateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  componentProps: PropTypes.object,
};
AppDateTimePicker.defaultProps = {
  value: null,
  name: undefined,
  onChange: undefined,
  className: undefined,
  componentProps: null,
};

export default AppDateTimePicker;
