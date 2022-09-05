import * as React from 'react';

import { Meta } from '@/components/layout/Meta';
import Asked from '@/components/templates/Asked';
import Footer from '@/components/templates/Footer';
import Hero from '@/components/templates/Hero';
import SignUpAction from '@/components/templates/SignUpAction';
import SocialProof from '@/components/templates/SocialProof';
import VerticalFeatures from '@/components/templates/VerticalFeatures';

import { AppConfig } from '@/utils/AppConfig';

export default function Base() {
  return (
    <div className='text-gray-600 antialiased'>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <SocialProof />
      <Asked />
      <SignUpAction />
      <Footer />
    </div>
  );
}
