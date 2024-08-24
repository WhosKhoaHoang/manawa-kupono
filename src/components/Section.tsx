import type { ReactNode } from 'react';

type ISectionProps = {
  id: string
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    id = { props.id }
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.children}
  </div>
);

export { Section };
