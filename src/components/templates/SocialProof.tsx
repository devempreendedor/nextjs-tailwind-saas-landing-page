import Image from 'next/image';

import Section from '@/components/layout/Section';

export default function SocialProof() {
  return (
    <Section>
      <div className='flex justify-center'>
        <div className='flex max-w-xl flex-col items-center text-center'>
          <div>
            <Image
              height={100}
              width={100}
              alt='avatar-1'
              src='/images/avatar.jpg'
              className='flex rounded-full'
            />
          </div>
          <p className='mt-4 text-xl'>
            "Maecenas massa ex, pretium eget arcu et, sollicitudin laoreet
            lacus. Ut ullamcorper ligula sit amet luctus condimentum. Morbi a
            facilisis arcu. Duis euismod"
          </p>
          <h3 className='mt-2 text-sm'>
            James Clear – Author of the no. 1 New York Times bestseller, Atomic
            Habits.
          </h3>
        </div>
      </div>
    </Section>
  );
}
