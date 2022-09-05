import Section from '@/components/layout/Section';

export default function Footer() {
  return (
    <Section yPadding='py-4'>
      <div className='flex w-full justify-center'>
        <h5>© SaaS {new Date().getFullYear()}</h5>
      </div>
    </Section>
  );
}
