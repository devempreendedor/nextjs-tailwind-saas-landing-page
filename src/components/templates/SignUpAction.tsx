import Button from '@/components/buttons/Button';
import TextField from '@/components/inputs/TextField';
import Section from '@/components/layout/Section';

export default function SignUpAction() {
  return (
    <Section>
      <div className='flex flex-col items-center'>
        <h1>Join the waitlist now</h1>
        <div className='mt-16 flex items-center'>
          <TextField placeholder='Your email...' />
          <Button className='ml-4'>Click to get early access</Button>
        </div>
      </div>
    </Section>
  );
}
