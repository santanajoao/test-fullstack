import { cn } from '@/lib/tailwind';
import Link, { LinkProps } from 'next/link';
import { ComponentProps } from 'react';

type ButtonLikeProps = {
  variant?: 'fill' | 'outline',
  size?: 'default' | 'small',
};

const styles = ({ size, variant }: ButtonLikeProps) => cn(
  'py-2 px-4 rounded-md text-center',
  {
    'text-base': size === 'default',
    'text-sm': size === 'small',
  },
  {
    'bg-[#e29836] text-white font-medium disabled:grayscale': variant === 'fill',
    'border border-[#e29836] text-[#e29836] hover:text-white hover:bg-[#e29836] hover:font-medium transition-colors': variant === 'outline',
  },
);

type ButtonProps = ComponentProps<'button'> & ButtonLikeProps;

export function Button({ variant = 'fill', size = 'default', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        styles({ variant, size }),
        className,
      )}

      {...props}
    />
  );
}


type AncorProps = ComponentProps<'a'> & LinkProps & ButtonLikeProps;

export function Ancor({ variant = 'fill', size = 'default', className, ...props }: AncorProps) {
  return (
    <Link
      className={cn(
        styles({ variant, size }),
        className,
      )}
      
      {...props}
    />
  );
}

const ButtonLike = { Ancor, Button };

export { ButtonLike as default };
