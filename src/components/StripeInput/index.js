import React, {useRef, useImperativeHandle} from 'react';
import {fade, useTheme} from '@material-ui/core/styles';

const stripeInput = ({
  component: Component, inputRef, options, placeholder, onChange, ...other
}) => {
  const elementRef = useRef();
  const theme = useTheme();
  useImperativeHandle(inputRef, () => ({
    focus: () => elementRef.current.focus,
    onKeyDown: () => elementRef.current.onKeyDown,
  }));

  return (
    <Component
      onReady={(element) => (elementRef.current = element)}
      onChange={onChange}
      options={{...options,
        placeholder: placeholder,
        style: {
          base: {
            'color': theme.palette.text.primary,
            'fontSize': `${theme.typography.fontSize}px`,
            'fontFamily': theme.typography.fontFamily,
            'fontWeight': 100,
            '::placeholder': {
              color: fade(theme.palette.text.primary, 0.42),
            },
          },
          invalid: {
            color: 'red',
          },
        },
      }} {...other} />
  );
};

export default stripeInput;
