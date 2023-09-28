import * as React from 'react';

import Link from '@/components/link';
import Card from '@/components/card';

import { getLinks, getSocials } from '@/utils/notion';

export default async function Page() {
    const [links, socials] = await Promise.all([getLinks(), getSocials()]);

    const websites = links.filter((link) => link.categories.includes('Website'));
    const supports = links.filter((link) => link.categories.includes('Support'));

    return (
        <div className="container flex min-h-screen flex-col gap-y-12 border-x border-transparent py-12 md:border-slate-800 md:py-24">
            <section id="socials" className="relative">
                <h2 className="sr-only">Socials</h2>

                <ul className="flex flex-wrap items-center justify-center gap-2">
                    {socials.map((social) => (
                        <li key={social.id}>
                            <Link
                                href={social.href}
                                className="inline-flex items-center border border-slate-800 px-4 py-2 text-xs text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                            >
                                {social.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="websites" aria-labelledby="websites-title" className="relative">
                <div className="pb-4">
                    <h2 id="websites-title" className="text-lg font-bold text-white">
                        Websites
                    </h2>

                    <p className="text-xs font-semibold text-slate-400">Some of the websites I have created.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {websites.map((website) => (
                        <Card key={website.id} slug={website.slug} title={website.title} description={website.description} />
                    ))}
                </div>
            </section>

            <section id="supports" aria-labelledby="supports-title" className="relative">
                <div className="pb-4">
                    <h2 id="supports-title" className="text-lg font-bold text-white">
                        Supports
                    </h2>

                    <p className="text-xs font-semibold text-slate-400">Thank you for supporting!</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {supports.map((support) => (
                        <Card key={support.id} slug={support.slug} title={support.title} description={support.description} />
                    ))}
                </div>
            </section>
        </div>
    );
}
