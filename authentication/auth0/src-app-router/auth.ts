import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

import type { NextAuthConfig } from 'next-auth';

export const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    strategy: 'jwt',
  },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH_AUTH0_ID as string,
      clientSecret: process.env.AUTH_AUTH0_SECRET as string,
      issuer: process.env.AUTH_AUTH0_ISSUER as string,
      authorization: {
        params: {
          scope: process.env.AUTH_AUTH0_API_SCOPES as string,
          audience: encodeURI(process.env.AUTH_AUTH0_AUDIENCE as string),
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      // console.log("session", { session, user, token })

      if (token) {
        session.accessToken = token.accessToken;
        session.scope = token.scope;
        session.error = token.error;
      }

      return session;
    },
    async jwt({ token, user, account, profile, trigger }) {
      // console.log("jwt", { token, user, account, profile, trigger })

      if (account) {
        token.accessToken = account.access_token;
        token.scope = account.scope;
      }

      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
