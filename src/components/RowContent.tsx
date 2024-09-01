import className from 'classnames';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type IRowContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const RowContent = (props: IRowContent) => {
  const rowContentClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={`${rowContentClass} text-brown-100` }>
      <div className="w-full p-6 sm:w-1/2">
        <Image className='instructor-img' src='/instructor1.jpeg' alt="my-image" width={1000} height={500} />
      </div>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
    </div>
  );
};

export { RowContent };
