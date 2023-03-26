// ItemSelect.js

import { forwardRef, useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';

import {
  SEARCH_QUERY_DEBOUNCE_PERIOD,
  SEARCH_MININUM_LENGTH,
} from 'src/config';

function getItemFromValue(value = null) {
  if (!value) {
    return null;
  }
  let result;
  if (Array.isArray(value)) {
    result = [];
    for (const _ of value) {
      result.push(JSON.parse(_));
    }
  } else {
    result = JSON.parse(value);
  }

  return result;
}

const ItemSelect = forwardRef(function (
  {
    value,
    onChange,
    onBlur,
    name,
    errors,
    isLocked,
    label,
    isClearable,
    isRawValue,
    onFocus,
    placeholder,
    helpText,
    isDisabled,
    items,
    onSearchItems,
    getOptionItem,
    pager,
    isSync,
    isMultiple,
    labelClass,
    noOptionsMessage,
    hideLabel,
  },
  ref
) {
  const valueRef = useRef();
  const [defaultValue, setDefaultValue] = useState();

  useEffect(() => {
    if (value) {
      if (Array.isArray(value)) {
        valueRef.current = getOptionItem
          ? value.map((i) => {
              return getOptionItem(i);
            })
          : [];
        setDefaultValue(valueRef.current);
      } else {
        valueRef.current = getOptionItem ? getOptionItem(value) : undefined;
        setDefaultValue(valueRef.current);
      }
    } else {
      setDefaultValue(undefined);
    }
  }, [getOptionItem, value]);

  const getOptions = useCallback(() => {
    const options = !isLocked
      ? items
        ? items
        : []
      : getOptionItem
      ? [getOptionItem(value)]
      : [];

    return options.map((item) =>
      getOptionItem ? getOptionItem(item) : undefined
    );
  }, [isLocked, items, getOptionItem, value]);

  const loadOptions = useCallback(
    (_, callback) => {
      callback(getOptions());
    },
    [getOptions]
  );

  const handleInputChange = useCallback(
    (inputValue) => {
      if (inputValue) {
        const doSearchItems = debounce(() => {
          if (inputValue.length >= SEARCH_MININUM_LENGTH) {
            onSearchItems({ itemname: inputValue, ...pager });
          }
        }, SEARCH_QUERY_DEBOUNCE_PERIOD);
        doSearchItems();
      }
    },
    [onSearchItems, pager]
  );

  const handleChange = useCallback(
    (value) => {
      let result;
      if (Array.isArray(value)) {
        result = value.map((i) => i.value);
      } else {
        result = value?.value;
      }
      onChange && onChange(!isRawValue ? getItemFromValue(result) : result);
    },
    [onChange, isRawValue]
  );

  return (
    <div>
      {!hideLabel ? (
        <label className={`form-label ${labelClass}`}>{label}</label>
      ) : null}
      {isSync ? (
        <Select
          options={getOptions()}
          inputRef={ref}
          className="w-100 text-black"
          placeholder={placeholder}
          value={defaultValue}
          onChange={handleChange}
          isClearable={isClearable}
          onBlur={onBlur}
          isDisabled={isDisabled}
          isMulti={isMultiple}
          noOptionsMessage={noOptionsMessage}
        />
      ) : (
        <AsyncSelect
          inputRef={ref}
          value={defaultValue}
          onInputChange={
            !isLocked
              ? onSearchItems
                ? handleInputChange
                : undefined
              : undefined
          }
          loadOptions={loadOptions}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-100 text-black"
          placeholder={placeholder}
          isClearable={isClearable}
          onFocus={onFocus}
          isDisabled={isDisabled}
          isMulti={isMultiple}
          noOptionsMessage={noOptionsMessage}
          defaultOptions={getOptions()}
        />
      )}
      {name && errors && errors[name] && (
        <div className="form-text text-danger">{errors[name]['message']}</div>
      )}
      <span className="form-text">{helpText}</span>
    </div>
  );
});

ItemSelect.displayName = 'ItemSelect';

ItemSelect.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.any,
  isLocked: PropTypes.bool,
  label: PropTypes.string,
  isClearable: PropTypes.bool,
  isRawValue: PropTypes.bool,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  isDisabled: PropTypes.bool,
  errors: PropTypes.object,
  items: PropTypes.array,
  onSearchItems: PropTypes.func,
  getOptionItem: PropTypes.func,
  pager: PropTypes.object,
  isSync: PropTypes.bool,
  isMultiple: PropTypes.bool,
  labelClass: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  hideLabel: PropTypes.bool,
};
ItemSelect.defaultProps = {
  value: undefined,
  onChange: undefined,
  onBlur: undefined,
  name: undefined,
  isLocked: false,
  label: 'Item',
  isClearable: false,
  isRawValue: false,
  onFocus: undefined,
  placeholder: 'Search item...',
  helpText: 'Search and select item',
  isDisabled: false,
  errors: null,
  items: [],
  onSearchItems: undefined,
  getOptionItem: undefined,
  pager: null,
  isSync: false,
  isMultiple: false,
  labelClass: undefined,
  noOptionsMessage: undefined,
  hideLabel: false,
};

export default ItemSelect;
