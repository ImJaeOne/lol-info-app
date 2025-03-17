import LolChamp from "@/public/assets/league-of-legends-3ggpjbfly8o9uo8a.webp";
import HomeLinkItem from "@/components/Home/HomeLinkItem";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 mt-6">
      <h1 className="text-3xl font-bold text-red-500">
        리그 오브 레전드 정보 앱
      </h1>
      <span className="white">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </span>
      <HomeLinkItem
        href="/champions"
        imgSrc={LolChamp}
        altText="챔피언 이미지"
        linkText="챔피언 목록 보기"
      />

      <HomeLinkItem
        href="/rotation"
        imgSrc={LolChamp}
        altText="로테이션 이미지"
        linkText="금주 로테이션 확인"
      />

      <HomeLinkItem
        href="/items"
        imgSrc={LolChamp}
        altText="아이템 이미지"
        linkText="아이템 목록 보기"
      />
    </main>
  );
}
