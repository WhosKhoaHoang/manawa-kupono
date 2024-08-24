import Link from 'next/link';
import { Background } from './Background';
import { Section } from './Section';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

const Hero = () => (  
  <Background color="white">
    <Navbar logo={<Logo xl />}>
      <li>
        <Link href="/">Instructor</Link>
      </li>
      <li>
        <Link href="/">Price</Link>
      </li>
      <li>
        <Link href="/">Gallery</Link>
      </li>
      <li>
        <Link href="/">Access</Link>
      </li>
    </Navbar>

    {/* FOCUS HERE */}
    <Section yPadding="pt-20 pb-32">
      <Logo></Logo>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <Logo></Logo>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <Logo></Logo>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <Logo></Logo>
    </Section>
    <Section yPadding="pt-20 pb-32">
      <Logo></Logo>
    </Section>

  </Background>
);

export { Hero };
