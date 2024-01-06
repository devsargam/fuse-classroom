'use client';

import { signOut } from 'next-auth/react';

export const Logout = (): JSX.Element => {
  return <button onClick={() => signOut()}>Logout</button>;
};
