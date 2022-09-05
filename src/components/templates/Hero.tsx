import Image from 'next/image';

import Button from '@/components/buttons/Button';
import Section from '@/components/layout/Section';
import { Logo } from '@/components/templates/Logo';

export default function Hero() {
  return (
    <Section yPadding='py-8' full>
      <div className='flex w-full items-center justify-between'>
        <Logo />
        <div>
          <Button>Login</Button>
        </div>
      </div>
      <div className='mt-8 flex h-full flex-col items-center md:mt-0 md:flex-row'>
        <div className='flex-1'>
          <h2 className='text-6xl font-bold text-gray-900'>
            Lorem ipsum dolor sit amet.
          </h2>
          <p className='mt-4 text-xl'>
            Maecenas sit amet augue nunc. Aliquam pulvinar, ante quis malesuada
            eleifend.
          </p>
          <Button className='mt-4'>Free Trial</Button>
          <div className='mt-6 flex'>
            <div className='mr-4'>
              <Image
                height={100}
                width={100}
                alt='avatar-1'
                src='/images/avatar.jpg'
                className='flex rounded-full'
              />
            </div>
            <div>
              <p className='text-xs'>
                "Vestibulum vitae diam arcu. Curabitur ut faucibus elit. Nullam
                sagittis orci nec lacus scelerisque viverra."
              </p>
              <h3 className='mt-2 text-sm'>
                James Clear – Author of the no. 1 New York Times bestseller,
                Atomic Habits.
              </h3>
            </div>
          </div>
        </div>
        <div className='mt-4 flex-1 md:mt-0'>
          <Image
            alt='hero'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            src='/images/hero.png'
          />
        </div>
      </div>
    </Section>
  );
}
