우선순위 생각 말고 하나씩 해보자.

### Todo

- [ ] router errorElement 추가
- [ ] react query 또는 axios 사용해서 데이터 통신 (cache를 위해?)
- [ ] 상세 페이지 내 page content 데이터 연결
- [ ] console에 로그가 두번씩 찍히는 현상
- [ ] Error, Loading 컴포넌트 하나로 합치고 재활용 가능하게 적절한 컴포넌트로 변경
  - 컴포넌트 구성 참고
    1. https://mui.com/material-ui/react-autocomplete/
    2. https://getbootstrap.com/docs/5.3/getting-started/introduction/

### Done
- [x] .jsx 확장자에서 발생하는 오류 제거 `Unknown word (CssSyntaxError)Stylelint(CssSyntaxError)`
- [x] 상세 페이지에서 새로고침 시 404 not found
  - [spa-github-pages](https://github.com/rafgraph/spa-github-pages)로 404는 해결
  - link to로 클릭한 링크에서 데이터를 가져오는데, 새로고침을 하면 해당 데이터들이 없어서 에러 발생 😢
- [x] 상태 관련 컴포넌트 추가 및 적용
  - [x] 로딩중
  - [x] 에러
