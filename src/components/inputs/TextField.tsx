import { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: string;
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  ...otherProps
}) => {
  return (
    <input
      {...otherProps}
      className='appearance-none rounded border px-4 py-2'
    />
  );
};

export default TextField;
