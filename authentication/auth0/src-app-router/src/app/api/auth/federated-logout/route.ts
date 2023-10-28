import { NextResponse } from 'next/server';
import { auth } from 'auth';

export const GET = auth(() => {
  return NextResponse.redirect(
    `${process.env.AUTH_AUTH0_ISSUER}/v2/logout?federated&client_id=${process.env.AUTH_AUTH0_ID}&returnTo=${process.env.AUTH_URL}`,
  );
});
