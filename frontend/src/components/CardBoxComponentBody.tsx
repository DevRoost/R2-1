import React, { ReactNode } from 'react';

type Props = {
  noPadding?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function CardBoxComponentBody({
  noPadding = false,
  className,
  children,
}: Props) {
  return (
    <div className={`flex-1 customcardLayout ${noPadding ? '' : 'p-6'} ${className}`} >
      {children}
      <a>&#8594;</a>
    </div>
  );
}
