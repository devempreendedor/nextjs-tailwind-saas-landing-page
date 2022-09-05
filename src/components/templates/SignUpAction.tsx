import Button from '@/components/buttons/Button';
import TextField from '@/components/inputs/TextField';
import Section from '@/components/layout/Section';

export default function SignUpAction() {
  return (
    <Section>
      <div className='flex flex-col items-center'>
        <h1>Join the waitlist now</h1>
        <div className='mt-16 flex flex-col items-center md:flex-row'>
          <TextField placeholder='Your email...' />
          <Button className='mt-4 w-full md:ml-4 md:mt-0'>
            Click to get early access
          </Button>
        </div>
      </div>
    </Section>
  );
}
