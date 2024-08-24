import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-brown-100 space-x-10">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { Navbar };
