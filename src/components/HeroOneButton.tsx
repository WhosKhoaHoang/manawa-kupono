import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo } from './Logo';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">

      <div>
        <Link href="/"><Logo></Logo></Link>
      </div>

    {/* <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    {props.button} */}
  </header>
);

export { HeroOneButton };
