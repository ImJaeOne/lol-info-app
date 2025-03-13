export type Champion = {
  type: string;
  format: string;
  version: string;
  // Record는 객체 타입의 키와 값을 정의 할 때 사용하는 유틸리티 타입
  data: Record<string, ChampionsDetail>;
};

export type ChampionsDetail = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
  };
  lore: string;
  info: ChampionInfo;
  spells: ChampionSpells[];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
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
