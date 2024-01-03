// import { Card } from '@repo/ui/card';
import React from 'react';
import { PrismaClient } from '@repo/database';

export default async function Page(): Promise<JSX.Element> {
  const client = new PrismaClient();
  const res = await client.user.findMany();

  return (
    <main>
      {/* <Card href="https://test.com" title="something">
        Hello World
      </Card> */}
      <h1 className="text-blue-700">{JSON.stringify(res)}</h1>
    </main>
  );
}
