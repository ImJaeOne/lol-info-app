export type Champion = {
  version: string;
  data: Record<string, ChampionsDetail>;
};

export type ChampionsDetail = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
};

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  lore: string;
  spells: ChampionSpells[];
};

export type ChampionSpells = {
  id: string;
  name: string;
  description: string;
  image: ChampionImage;
};

export type ChampionImage = {
  full: string;
};
