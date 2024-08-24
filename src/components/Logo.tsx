// import { AppConfig } from '../utils/AppConfig';
import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      {/* <img src='/flower_logo.JPG' /> */}
      {/* <Image src='/flower_logo.JPG' alt="my-image" width={500} height={500} /> */}
      <Image src='/first_section_rounded.png' alt="my-image" width={1000} height={500} />
    </span>
  );
};

export { Logo };
