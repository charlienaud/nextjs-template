'use server';

import { signIn, signOut } from 'auth';

export const signInAction = async () => {
  return await signIn();
};

export const signOutAction = async () => {
  return await signOut({ redirectTo: '/api/auth/federated-logout' });
};
