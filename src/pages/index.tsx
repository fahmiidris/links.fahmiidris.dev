import * as React from 'react';
import Image from 'next/image';

import { Link } from '@/components/atoms/link';
import { RootLayout } from '@/components/templates/root-layout';

import profileIMG from '@/images/logo-fahmiidris.png';

import { removeProtocol } from '@/utils/string-helper';

import type { TNextPageWithLayout } from '@/types/app.type';

type TLink = {
  href: string;
  title: string;
};

const sosmed: TLink[] = [
  {
    href: 'mailto:fahmiidris.dev@gmail.com',
    title: 'E-mail',
  },
  {
    href: 'https://www.instagram.com/fahmiidris.dev/',
    title: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/fahmiidris-dev/',
    title: 'LinkedIn',
  },
  {
    href: 'https://www.github.com/fahmiidris-labs',
    title: 'GitHub',
  },
  {
    href: 'https://www.twitter.com/fahmiidris_dev',
    title: 'Twitter',
  },
  {
    href: 'https://t.me/fahmiidris_dev',
    title: 'Telegram',
  },
];

const resources: Array<TLink & { description: string }> = [
  {
    href: 'https://www.fahmiidris.dev',
    title: 'Personal Website',
    description:
      'Fahmi Idris Portfolio, Article, Personal Project Showcase, and My Experience History.',
  },
  {
    href: 'https://www.fahmiidris.dev/articles',
    title: 'My Articles and Life Stories.',
    description:
      'Some personal opinions on technology and my random thoughts. Sometimes, it contains stories about feelings.',
  },
];

const supports: Array<TLink & { description: string }> = [
  {
    href: 'https://www.saweria.co/fahmiidris',
    title: 'Support Fahmi Through Saweria!',
    description:
      'Thank you so much for supporting Fahmi through Saweria. It really helps to keep him motivated for coding!',
  },
  {
    href: 'https://www.trakteer.id/fahmiidris/tip',
    title: 'Treat Fahmi to an Ice Cream!',
    description:
      'Thank you for the ice cream! It was delicious and helps to keep Fahmi motivated for coding!',
  },
  {
    href: 'https://www.github.com/sponsors/fahmiidris-labs',
    title: 'Become a GitHub Sponsor for Fahmi!',
    description: 'Wowwwww! Thank you for becoming a sponsor to help support Fahmi!',
  },
];

const HomePage: TNextPageWithLayout = () => {
  return (
    <>
      <header className="container pt-12">
        <figure className="flex flex-col items-center justify-center space-y-2">
          <div className="relative aspect-square w-24 overflow-hidden rounded-full">
            <Image
              src={profileIMG}
              alt="My Profile"
              layout="fill"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="text-center">
            <h1 className="text-2xl font-semibold text-white">Fahmi Idris</h1>
            <p className="text-xs font-semibold text-slate-400">
              Frontend Engineer based in West Java - Indonesia.
            </p>
          </figcaption>
        </figure>

        <nav className="flex items-center justify-center pt-4">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {sosmed.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  isExternal={true}
                  className="inline-flex items-center border border-slate-800 px-4 py-2 text-xs text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="my-12 space-y-16 overflow-hidden py-4">
        <section id="resources" className="relative">
          <div className="container flex flex-col space-y-4">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white">Resources</h2>
              <p className="text-xs font-semibold text-slate-400">Some resources that I made.</p>
            </div>
            <div className="grid-col-1 grid gap-4 md:grid-cols-2">
              {resources.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  isExternal={true}
                  className="relative flex flex-col space-y-1 border border-slate-800 p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-cyan-400">
                      {removeProtocol(item.href)}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="supports" className="relative">
          <div className="container flex flex-col space-y-4">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white">Support Fahmi Idris</h2>
              <p className="text-xs font-semibold text-slate-400">Thank you for supporting!</p>
            </div>
            <div className="grid-col-1 grid gap-4 md:grid-cols-2">
              {supports.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  isExternal={true}
                  className="relative flex flex-col space-y-1 border border-slate-800 p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-cyan-400">
                      {removeProtocol(item.href)}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

HomePage.Props = {
  Layout: RootLayout,
  meta: {
    title: "Hi! Let's Connect!",
    description: "Hi! I'm Fahmi Idris, a Frontend Web Developer based in West Java, Indonesia.",
  },
};

export default HomePage;
