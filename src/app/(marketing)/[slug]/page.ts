import { notFound, redirect } from 'next/navigation';

import { getUrlBySlug } from '@/utils/notion';

import type { TPageProps } from '@/types/page.type';

export default async function Page({ params }: TPageProps<{ slug: string }>) {
    const url = await getUrlBySlug(params?.slug);

    if (!url) {
        notFound();
    }

    redirect(url.href);
}
