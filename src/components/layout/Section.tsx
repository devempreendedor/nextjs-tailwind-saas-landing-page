import { ReactNode } from 'react';

type ISectionProps = {
  yPadding?: string;
  children: ReactNode;
  full?: boolean;
};

export default function Section(props: ISectionProps) {
  return (
    <div
      className={`mx-auto max-w-screen-lg px-3 
          ${props.yPadding ? props.yPadding : 'py-16'} ${
        props.full && 'h-screen'
      }`}
    >
      {props.children}
    </div>
  );
}
