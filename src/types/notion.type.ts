export type TLink = {
    id: string;
    properties: TLinkProperties;
};

export type TSocial = {
    id: string;
    properties: TSocialsProperties;
};

type TLinkProperties = {
    title: TTitleColumn;
    description: TTextColumn;
    slug: TTextColumn;
    categories: TMultiSelectColumn;
    href: TTextColumn;
    count: TTextColumn;
};

type TSocialsProperties = {
    title: TTitleColumn;
    href: TTextColumn;
    order: TNumberColumn;
};

type TTitleColumn = {
    id: string;
    type: 'title';
    title: [RichText];
};

type TTextColumn = {
    id: string;
    type: 'rich_text';
    rich_text: [RichText | undefined];
};

type TNumberColumn = {
    id: string;
    type: 'number';
    number: number;
};

type RichText = {
    type: string;
    plain_text: string;
};

type TMultiSelectColumn = {
    id: string;
    multi_select: Array<{
        id: string;
        name: string;
    }>;
};
