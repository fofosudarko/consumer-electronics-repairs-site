// form-reset.js

import { useEffect } from 'react';

export default function useFormReset({
  reset = null,
  item = null,
  values = null,
}) {
  useEffect(() => {
    if (reset) {
      reset({ ...values });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, reset]);
}
