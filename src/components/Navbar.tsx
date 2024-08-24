import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className='navbar'>
    <nav className='mx-auto max-w-screen-lg pt-5 pb-5 px-3'>
      <ul className="flex items-center text-xl font-medium text-brown-100 space-x-10">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { Navbar };
