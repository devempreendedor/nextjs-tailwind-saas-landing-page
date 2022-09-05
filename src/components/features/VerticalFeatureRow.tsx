import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function VerticalFeatureRow(props: IVerticalFeatureRowProps) {
  const verticalFeatureClass = clsx(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className='w-full text-center sm:w-1/2 sm:px-6'>
        <h3 className='text-3xl font-semibold text-gray-900'>{props.title}</h3>
        <div className='mt-6 text-xl leading-9'>{props.description}</div>
      </div>

      <div className='w-full p-6 sm:w-1/2'>
        <Image
          width='100%'
          height='100%'
          layout='responsive'
          objectFit='contain'
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
}
