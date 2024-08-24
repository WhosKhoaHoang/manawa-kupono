import Link from 'next/link';
import { Background } from './Background';
import { Section } from './Section';
import { Logo } from './Logo';
import { Button } from './Button';
import { NavbarTwoColumns } from './NavbarTwoColumns';
import { HeroOneButton } from './HeroOneButton';

const Hero = () => (  
  <Background color="white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
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
      </NavbarTwoColumns>
    </Section>

    {/* FOCUS HERE */}
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section>

  </Background>
);

export { Hero };
