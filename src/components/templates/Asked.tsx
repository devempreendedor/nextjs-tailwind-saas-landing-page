import Section from '@/components/layout/Section';

export default function Asked() {
  return (
    <Section>
      <div className='flex flex-col items-center'>
        <h1>Frequently asked questions</h1>
        <div className='mt-8'>
          <div className='mt-8 flex flex-col text-left md:flex-row'>
            <h4 className='flex-1 text-xl'>When will Pheemu be available?</h4>
            <p className='flex-1 text-xl'>
              Waitlist users will get early access starting this summer!
            </p>
          </div>
          <div className='mt-8 flex flex-col text-left md:flex-row'>
            <h4 className='flex-1 text-xl'>
              What if I don't have any strategy at all?
            </h4>
            <p className='flex-1 text-xl'>
              Pheemu helps you build a strategy, no matter your experience in
              the markets. We offer a marketplace of other proven traders with
              strategies and concepts you can learn from as well as a video
              lesson library.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
