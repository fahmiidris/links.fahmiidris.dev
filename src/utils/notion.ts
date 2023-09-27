import { Client } from '@notionhq/client';

import type { TLink, TSocial } from '@/types/notion.type';

const NOTION_INTEGRATION_SECRET = process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET;
const NOTION_LINKS_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_LINKS_DATABASE_ID;
const NOTION_SOCIALS_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_SOCIALS_DATABASE_ID;

const notion: Client = new Client({ auth: NOTION_INTEGRATION_SECRET });

export async function getLinks() {
    if (!NOTION_LINKS_DATABASE_ID) {
        throw new Error('NEXT_PUBLIC_NOTION_LINKS_DATABASE_ID env is not defined');
    }

    const response = await notion.databases.query({
        database_id: NOTION_LINKS_DATABASE_ID,
    });

    const results = response.results as unknown as TLink[];

    return results.map((result) => ({
        id: result.id,
        title: result.properties.title.title[0]?.plain_text ?? '',
        description: result.properties.description.rich_text[0]?.plain_text ?? '',
        slug: result.properties.slug.rich_text[0]?.plain_text ?? '',
        categories: result.properties.categories.multi_select.map((category) => category.name),
        href: result.properties.href.rich_text[0]?.plain_text ?? '',
        count: Number(result.properties.count.rich_text[0]?.plain_text ?? '0'),
    }));
}

export async function getSocials() {
    if (!NOTION_SOCIALS_DATABASE_ID) {
        throw new Error('NEXT_PUBLIC_NOTION_SOCIALS_DATABASE_ID env is not defined');
    }

    const response = await notion.databases.query({
        database_id: NOTION_SOCIALS_DATABASE_ID,
    });

    const results = response.results as unknown as TSocial[];

    return results
        .map((result) => ({
            id: result.id,
            title: result.properties.title.title[0]?.plain_text ?? '',
            href: result.properties.href.rich_text[0]?.plain_text ?? '',
            order: result.properties.order.number,
        }))
        .sort((a, b) => a.order - b.order);
}

export async function getUrlBySlug(slug: string) {
    if (!NOTION_LINKS_DATABASE_ID) {
        throw new Error('NEXT_PUBLIC_NOTION_LINKS_DATABASE_ID env is not defined');
    }

    const response = await notion.databases.query({
        database_id: NOTION_LINKS_DATABASE_ID,
        filter: {
            property: 'slug',
            title: {
                equals: slug,
            },
        },
    });

    const result = response.results[0] as unknown as TLink;

    if (!result) {
        return null;
    }

    return {
        id: result.id,
        title: result.properties.title.title[0]?.plain_text ?? '',
        description: result.properties.description.rich_text[0]?.plain_text ?? '',
        slug: result.properties.slug.rich_text[0]?.plain_text ?? '',
        categories: result.properties.categories.multi_select.map((category) => category.name),
        href: result.properties.href.rich_text[0]?.plain_text ?? '',
        count: Number(result.properties.count.rich_text[0]?.plain_text ?? '0'),
    };
}
