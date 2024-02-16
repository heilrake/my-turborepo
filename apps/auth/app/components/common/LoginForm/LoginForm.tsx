'use client';

import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export const LoginForm = () => {
  const [errorMessages, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Enter your email address" required />
      <input type="password" name="password" placeholder="Enter password" required minLength={6} />
      <button disabled={pending}>Login</button>

      {errorMessages && <p>{errorMessages}</p>}
    </form>
  );
};
