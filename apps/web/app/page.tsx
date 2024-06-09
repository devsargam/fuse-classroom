// import { Card } from '@repo/ui/card';
import React from 'react';
import prisma from '@fc/db';

export default async function Page(): Promise<JSX.Element> {
  const res = await prisma.user.findMany();

  return (
    <main>
      <h1 className="text-blue-700">Hello World</h1>
      {JSON.stringify(res)}
    </main>
  );
}
