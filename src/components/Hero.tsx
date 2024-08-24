import Link from 'next/link';
import { Background } from './Background';
import { Section } from './Section';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

const Hero = () => (  
  <Background color="white">
    <Navbar logo={<Logo xl />}>
      <li>
        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.replace("/#instructor") }}>Instructor</Link>
      </li>
      <li>
        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.replace("/#price") }}>Price</Link>
      </li>
      <li>
        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.replace("/#gallery") }}>Gallery</Link>
      </li>
      <li>
        <Link href="/" onClick={(e) => { e.preventDefault(); window.location.replace("/#access") }}>Access</Link>
      </li>
    </Navbar>

    {/* FOCUS HERE */}
    <Section id='top' yPadding="pt-20 pb-32">
      TOP
      <Logo></Logo>
    </Section>
    <Section id='instructor' yPadding="pt-20 pb-32">
      INSTRUCTOR
      <Logo></Logo>
    </Section>
    <Section id='price' yPadding="pt-20 pb-32">
      PRICE
      <Logo></Logo>
    </Section>
    <Section id='gallery' yPadding="pt-20 pb-32">
      GALLERY
      <Logo></Logo>
    </Section>
    <Section id='access' yPadding="pt-20 pb-64">
      ACCESS
      <Logo></Logo>
    </Section>
  </Background>
);

export { Hero };
