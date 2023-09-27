import * as React from 'react';

import Link from '@/components/link';

type TCardProps = {
    title: string;
    description: string;
    slug: string;
};

const FE_URL = process.env.NEXT_PUBLIC_FE_URL;

export default function Card({ title, description, slug }: TCardProps) {
    const href = `${FE_URL}/${slug}`;

    function removeHttps(url: string) {
        return url.replace(/(^\w+:|^)\/\//, '');
    }

    return (
        <div>
            <Link
                href={href}
                className="relative flex flex-col space-y-1 border border-slate-800 p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
                <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-cyan-400">{removeHttps(href)}</p>
                </div>

                <div className="flex flex-col space-y-1">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="truncate text-xs text-slate-400">{description}</p>
                </div>
            </Link>
        </div>
    );
}
