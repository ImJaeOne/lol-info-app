export type Item = {
    type: string;
    version: string;
    basic: object;
    data: Record<string, ItemDetail>
}

export type ItemDetail = {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: ItemImage;
    gold: ItemGold;
    tags: string[];
    maps: object;
    stats: object;
}

export type ItemImage = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export type ItemGold = {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}