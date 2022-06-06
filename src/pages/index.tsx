import * as React from 'react';
import Image from 'next/image';

import { Link } from '@/components/atoms/link';
import { RootLayout } from '@/components/templates/root-layout';

import profileIMG from '@/images/logo-fahmiidris.png';

import type { TNextPageWithLayout } from '@/types/app.type';

type TLink = {
  href: string;
  title: string;
  description?: string;
  domain?: string;
};

const sosmed: TLink[] = [
  {
    href: 'mailto:fahmiidris.1607@gmail.com',
    title: 'Gmail',
  },
  {
    href: 'https://www.instagram.com/_fahmiidris.a/',
    title: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/fahmiidris-labs/',
    title: 'LinkedIn',
  },
  {
    href: 'https://www.github.com/fahmiidris-labs',
    title: 'GitHub',
  },
  {
    href: 'https://www.twitter.com/FahmiIdrisA',
    title: 'Twitter',
  },
  {
    href: 'https://t.me/FahmiIdrisA',
    title: 'Telegram',
  },
  {
    href: 'https://drive.google.com/file/d/1pZJB7DrO3RzuXmAXHqyKUQ3B4ug4tHDq/view?usp=sharing',
    title: 'CV Fahmi Idris',
  },
];

const resources: TLink[] = [
  {
    href: 'https://www.fahmiidris.dev',
    title: 'Personal Website',
    description:
      'Fahmi Idris Portfolio, Blog, Personal Project Showcase, and My Experience History.',
    domain: 'www.fahmiidris.dev',
  },
  {
    href: 'https://www.fahmiidris.dev/blog',
    title: 'My Blog',
    description:
      'All Fahmi Idris news, straight from me. Opinions and some personal stuff about programming.',
    domain: 'www.fahmiidris.dev/blog',
  },
];

const naqimart: TLink[] = [
  {
    href: 'https://www.naqimart.com',
    title: 'naqimart.com',
    description:
      'Official website of Naqimart, smart e-commerce for smart shoppers.',
    domain: 'www.naqimart.com',
  },
];

const kloningan: TLink[] = [
  {
    href: 'https://www.kloningan.com',
    title: 'kloningan.com',
    description:
      'Cloning the User Interface of Several Famous Websites on the Internet created by Kloningan Contributors',
    domain: 'www.kloningan.com',
  },
];

const supports: TLink[] = [
  {
    href: 'https://saweria.co/fahmiidris',
    title: 'Sawer Fahmi Yuu!',
    description: 'Makasih yang udah nyawer! jadi semangat ngoding lagi nih! Pluss Ultraaaa!',
    domain: 'saweria.co/fahmiidris',
  },
  {
    href: 'https://trakteer.id/fahmiidris',
    title: 'Traktir Fahmi Beli Eskrim!',
    description: 'Makasih ya eskrim nya. Enak banget! jadi semangat ngoding lagi nih!',
    domain: 'trakteer.id/fahmiidris',
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

      <main>
        <section id="resources" className="relative">
          <div className="container flex flex-col space-y-4 pt-8">
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
                    <p className="text-xs font-semibold text-cyan-400">{item.domain}</p>
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

        <section id="naqimart" className="relative">
          <div className="container flex flex-col space-y-4 pt-8">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white">naqimart.com</h2>
              <p className="text-xs font-semibold text-slate-400">
                Smart shop for you, easier shopping with naqimart.
              </p>
            </div>
            <div className="grid-col-1 grid gap-4 md:grid-cols-2">
              {naqimart.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  isExternal={true}
                  className="relative flex flex-col space-y-1 border border-slate-800 p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-cyan-400">{item.domain}</p>
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

        <section id="kloningan" className="relative">
          <div className="container flex flex-col space-y-4 pt-8">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white">kloningan.com</h2>
              <p className="text-xs font-semibold text-slate-400">
                Start by imitating the existing one, then create a better one.
              </p>
            </div>
            <div className="grid-col-1 grid gap-4 md:grid-cols-2">
              {kloningan.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  isExternal={true}
                  className="relative flex flex-col space-y-1 border border-slate-800 p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-cyan-400">{item.domain}</p>
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
          <div className="container flex flex-col space-y-4 pt-12">
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
                    <p className="text-xs font-semibold text-cyan-400">{item.domain}</p>
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
    description: "Hi! Let's Connect! I'm Fahmi Idris, a web developer based in Indonesia."
  }
}

export default HomePage;
