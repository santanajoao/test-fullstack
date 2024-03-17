import { ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, Props>(
  function Input(props, ref) {
    return (
      <input
        {...props}
        ref={ref}
        className="border border-[#6e747a] placeholder:text-[#6e747a] rounded-md px-3 py-2 w-min"
      />
    );
  }
);

export { Input as default };
