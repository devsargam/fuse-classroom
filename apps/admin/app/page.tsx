import { PrismaClient } from '@repo/database';

const client = new PrismaClient();

export default async function Page(): Promise<JSX.Element> {
  const results = await client.user.findMany();

  console.log(results);
  return (
    <main>
      <h1 className="text-blue-500">This is admin page</h1>
      <p>Hello World</p>
    </main>
  );
}
