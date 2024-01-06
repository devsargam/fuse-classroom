import './global.css';
import '@repo/ui/styles.css';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';

import { Logout } from './components';
import { SideNav } from './components';
import { SessionProvider } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuse Classroom',
  description: 'An AI based learning platform',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession();

  console.log(session);

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        <SessionProvider>
          <SideNav />
          <Logout />
          <a href="/api/auth/signin/github">Login</a>
          <main className="">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
