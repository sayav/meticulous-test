import { NextAuthConfig } from "next-auth";

declare const window: {
  Meticulous: {
    isRunningAsTest: boolean;
  };
};

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl, headers } }) {
      let isLoggedIn = !!auth?.user || headers.get("meticulous-is-test");
      let isOnDashboard = nextUrl.pathname.startsWith("/protected");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
