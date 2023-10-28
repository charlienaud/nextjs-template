import { auth } from 'auth';

export const GET = auth((req) => {
  if (req.auth) {
    console.log(
      `can call external API with user accessToken: ${req.auth.accessToken}`,
    );
    return Response.json({ data: 'Protected data', auth: req.auth });
  }

  return Response.json({ message: 'Not authenticated' }, { status: 401 });
});
