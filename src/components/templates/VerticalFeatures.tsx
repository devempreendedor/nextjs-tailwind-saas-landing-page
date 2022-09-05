import VerticalFeatureRow from '@/components/features/VerticalFeatureRow';
import Section from '@/components/layout/Section';

export default function VerticalFeatures() {
  return (
    <Section>
      <VerticalFeatureRow
        title='You title here'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'
        image='/images/in-app-insights.png'
        imageAlt='First feature alt text'
      />

      <VerticalFeatureRow
        title='Your title here'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'
        image='/images/in-app-insights.png'
        imageAlt='Second feature alt text'
        reverse
      />

      <VerticalFeatureRow
        title='You title here'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'
        image='/images/in-app-insights.png'
        imageAlt='First feature alt text'
      />
    </Section>
  );
}
