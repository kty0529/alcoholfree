우선순위 생각 말고 하나씩 해보자! 💪🏻

### Todo

- [ ] 상세 페이지 내 page content 데이터 연결
  - React Query를 한번 더 돌려야하는데, [Queries](https://tanstack.com/query/v3/docs/react/guides/queries) 참고
- [ ] 이미지 로드에 블럭 현상을 보여주지 않게 적절한 효과 적용
- [ ] 코너 선생님이 해주신 [코드리뷰](https://www.notion.so/wallel/03e2d750095d466a949ce4b09972a91b) 진행

- [ ] router errorElement 추가
- [ ] Error, Loading 컴포넌트 하나로 합치고 재활용할 수 있게 적절한 컴포넌트로 변경
  - 컴포넌트 구성 참고
    1. https://mui.com/material-ui/react-autocomplete/
    2. https://getbootstrap.com/docs/5.3/getting-started/introduction/

### Done
- [x] console에 로그가 두 번씩 찍히는 현상 (두 번 이상도?)
- [x] react query 또는 axios 사용해서 데이터 통신 (cache를 위해?)
      <br>-> 개발 단계의 **Strict Mode**로 인해서 로그가 두번 찍히는 것 [(참고글)](https://stackoverflow.com/questions/62185425/why-is-console-log-logging-twice-in-react-js)
- [x] .jsx 확장자에서 발생하는 오류 제거 `Unknown word (CssSyntaxError)Stylelint(CssSyntaxError)`
      <br />➡️ 스타일 린트에 jsx 파일 설정 추가하여 해결
- [x] 상세 페이지에서 새로고침 시 404 not found
      <br />➡️ [spa-github-pages](https://github.com/rafgraph/spa-github-pages)로 404 해결
  - 새로고침을 하면 Link state로 넘겨받은 데이터를 사용할 수 없어서 에러 발생 😢
    <br />➡️ 상세페이지 내에서 useParams를 사용해 page id를 가져와 다시 API를 호출
- [x] API 상태 관련 컴포넌트 추가 및 적용
  - 로딩 중
  - 에러
