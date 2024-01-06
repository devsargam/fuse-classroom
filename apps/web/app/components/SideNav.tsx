import Image from 'next/image';
import Link from 'next/link';

interface IRoute {
  title: string;
  href: string;
  img: string;
}

const routes: IRoute[] = [
  {
    title: 'home',
    href: '/',
    img: '/home-icon.png',
  },
  {
    title: 'notification',
    href: '/',
    img: '/notification-icon.svg',
  },
];

export const SideNav = (): JSX.Element => {
  // Currently the logic is only for the bottom nav
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-green-950">
      <div className="grid max-w-sm h-full place-items-center grid-cols-2 mx-auto font-medium">
        {routes.map(({ title, href, img }) => (
          <Link href={href}>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5"
            >
              <Image
                className="fill-white"
                src={img}
                alt={`${title} - img`}
                height={50}
                width={50}
              />
              <span className="text-sm text-white">{title}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
