# LoL Info App

리그오브레전드의 챔피언과 아이템을 확인할 수 있는 웹 애플리케이션입니다.  
각 페이지에 따라 CSR, SSG, SSR, ISG 방식으로 렌더링됩니다.

## 🚀 배포 
### https://lol-info-app-beta.vercel.app/

## 🛠️ 기술 스택

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) 
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=reactquery&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)


## ✨ 주요 기능

### 1. RotationPage `prefetch`를 통한 UX 향상
RotationPage 컴포넌트에서는 React Query의 `prefetchQuery` 메서드를 활용하여 페이지의 초기 렌더링 전에 필요한 데이터를 미리 로드합니다. 이를 통해 클라이언트에서 데이터를 요청하는 대기 시간을 최소화하고, 사용자가 페이지를 방문했을 때 더 빠르고 부드러운 경험을 제공합니다.
```typescript
const queryClient = new QueryClient();

await queryClient.prefetchQuery({
  queryKey: [QUERY_KEY.ROTATIONKEYLIST],
  queryFn: () => getChampionRotation(),
});

await queryClient.prefetchQuery({
  queryKey: [QUERY_KEY.CHAMPIONLIST],
  queryFn: () => getChampionList(),
});

return (
  <HydrationBoundary state={dehydrate(queryClient)}>
    {/* 클라이언트 컴포넌트 */}
  </HydrationBoundary>
);
```

### 2. ChampionDetailPage Image `onLoad` 속성을 통한 UX 향상
ChampionDetailPage에서는 Image 컴포넌트의 onLoad 이벤트를 활용하여 이미지를 로드하는 동안 로딩 화면을 표시하고, 이미지 로드가 완료되면 로딩 화면을 숨기도록 처리합니다.
```typescript
const [loading, setLoading] = useState(true);

const handleImageLoadComplete = () => {
  setLoading(false);
};

return (
  <div>
    {loading && (
      <div>
        로딩 중...
      </div>
    )}
    <Image
      onLoad={handleImageLoadComplete}  
      src={`${PATH.DDRAGON_URL}/cdn/${version}/img/spell/${spell.image.full}`}
    />
  </div>
);
```
![onLoad](https://github.com/user-attachments/assets/63b8bda7-8473-45c1-97ca-c08083023f9f)

## 📝 문제 해결

- API 키가 네트워크 창에 노출되는 문제
  #### [Next.js에서 API 키 안전하게 사용하기(feat.라우트 핸들러)](https://dlawi0108.tistory.com/76)

- 라우트 핸들러를 통한 prefetch가 되지 않는 이유
  #### [Next.js - React-Query Prefetching(feat.라우트 핸들러...)](https://dlawi0108.tistory.com/77)

- onClick을 통한 error.tsx 렌더링 실패
  #### [onClick 이벤트 핸들러로 발생시키는 에러는 에러로 못 잡는다고?](https://dlawi0108.tistory.com/78)

## 🤔 느낀 점

이전에는 React만을 사용하면서 클라이언트와 서버에 대한 개념이 명확히 잡히지 않았지만, 이번에 Next.js를 사용하며 그 차이를 확실히 이해하게 되었습니다. React에서는 서버의 역할이 렌더링에 필요한 리소스를 브라우저에 전달하는 것(빈 HTML과 JS 번들)을 수행합니다. 하지만 Next.js에서는 렌더링 방식에 따라 서버에서 JS까지 모두 처리한 후 리소스를 전달할 수도 있고, 빈 HTML과 JS 번들을 보내줄 수도 있다는 점을 알게 되었습니다. 이로 인해 Next.js가 클라이언트와 서버의 역할을 더 세밀하게 구분하며 다양한 렌더링 방식을 지원한다는 점이 인상 깊었습니다.

또한, React Server Components(RSC)에서 라우트 핸들러를 사용하면 안티패턴이 된다는 점을 배우게 되었습니다. 이유는 서버 컴포넌트가 빌드되는 시점에 라우트 핸들러는 빌드되지 않아, 라우트 핸들러의 경로를 참조할 수 없기 때문입니다. 이러한 경험을 통해 서버 컴포넌트의 빌드 시점과 클라이언트 컴포넌트의 역할을 명확히 이해하게 되었습니다.

Next.js를 사용하면서 사용자 UX에 대해 더 많은 고민을 하게 되었고, 특히 이미지 최적화와 같은 부분에서 성능 향상을 위한 방법들이 많다는 것을 실감했습니다. 아직 이미지 최적화에 대해 더 배울 점이 많다는 생각이 들었으며, 앞으로 더 연구하고 개선할 부분이 많다는 점이 흥미롭게 다가왔습니다.
