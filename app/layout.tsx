import "./globals.css";

import { GeistSans } from "geist/font/sans";

let title = "Next.js + Postgres Auth Starter";
let description =
  "This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {(process.env.NODE_ENV === "development" ||
          process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="wdF8DyCrIOr9fskv2vQofxnLO2ssmFl48pwvKPMe"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
