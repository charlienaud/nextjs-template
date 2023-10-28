import { signInAction, signOutAction } from '@/actions/authActions';
import { Button } from './ui/button';

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={signInAction}>
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={signOutAction}>
      <button>Sign out</button>
    </form>
  );
}
