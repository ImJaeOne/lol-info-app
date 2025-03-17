export type Item = {
  version: string;
  data: Record<string, ItemDetail>;
};

export type ItemDetail = {
  name: string;
  plaintext: string;
  image: ItemImage;
};

export type ItemImage = {
  full: string;
};
