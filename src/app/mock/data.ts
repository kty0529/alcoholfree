export interface DrinkItem {
  id: string;
  properties: {
    Name: { title: Array<{ plain_text: string }> };
    Name_en: { rich_text: Array<{ plain_text: string }> };
    Proof: { number: number };
    Category: { select: { name: string; color: string } };
    Country: { rich_text: Array<{ plain_text: string }> };
    Brewery: { rich_text: Array<{ plain_text: string }> };
    Picture: { files: Array<{ file: { url: string } }> };
    Tags: { multi_select: Array<{ name: string; color: string }> };
  };
}

const PLACEHOLDER = (seed: number) =>
  `https://picsum.photos/seed/${seed}/400/400`;

export const MOCK_LIST: { results: DrinkItem[] } = {
  results: [
    {
      id: "mock-01",
      properties: {
        Name: { title: [{ plain_text: "하이네켄" }] },
        Name_en: { rich_text: [{ plain_text: "Heineken" }] },
        Proof: { number: 5.0 },
        Category: { select: { name: "라거", color: "green" } },
        Country: { rich_text: [{ plain_text: "네덜란드" }] },
        Brewery: { rich_text: [{ plain_text: "Heineken N.V." }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(10) } }] },
        Tags: { multi_select: [{ name: "청량감", color: "blue" }, { name: "세션", color: "green" }] },
      },
    },
    {
      id: "mock-02",
      properties: {
        Name: { title: [{ plain_text: "기네스 드래프트" }] },
        Name_en: { rich_text: [{ plain_text: "Guinness Draught" }] },
        Proof: { number: 4.2 },
        Category: { select: { name: "스타우트", color: "default" } },
        Country: { rich_text: [{ plain_text: "아일랜드" }] },
        Brewery: { rich_text: [{ plain_text: "Guinness Brewery" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(20) } }] },
        Tags: { multi_select: [{ name: "다크", color: "brown" }, { name: "크리미", color: "orange" }] },
      },
    },
    {
      id: "mock-03",
      properties: {
        Name: { title: [{ plain_text: "산토리 위스키 가쿠빈" }] },
        Name_en: { rich_text: [{ plain_text: "Suntory Kakubin" }] },
        Proof: { number: 40 },
        Category: { select: { name: "위스키", color: "yellow" } },
        Country: { rich_text: [{ plain_text: "일본" }] },
        Brewery: { rich_text: [{ plain_text: "Suntory" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(30) } }] },
        Tags: { multi_select: [{ name: "하이볼", color: "blue" }, { name: "부드러운", color: "purple" }] },
      },
    },
    {
      id: "mock-04",
      properties: {
        Name: { title: [{ plain_text: "앱솔루트 보드카" }] },
        Name_en: { rich_text: [{ plain_text: "Absolut Vodka" }] },
        Proof: { number: 40 },
        Category: { select: { name: "보드카", color: "blue" } },
        Country: { rich_text: [{ plain_text: "스웨덴" }] },
        Brewery: { rich_text: [{ plain_text: "Absolut Company" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(40) } }] },
        Tags: { multi_select: [{ name: "칵테일", color: "pink" }, { name: "깔끔한", color: "lightgray" }] },
      },
    },
    {
      id: "mock-05",
      properties: {
        Name: { title: [{ plain_text: "바카디 슈페리어" }] },
        Name_en: { rich_text: [{ plain_text: "Bacardi Superior" }] },
        Proof: { number: 37.5 },
        Category: { select: { name: "럼", color: "orange" } },
        Country: { rich_text: [{ plain_text: "쿠바" }] },
        Brewery: { rich_text: [{ plain_text: "Bacardi Limited" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(50) } }] },
        Tags: { multi_select: [{ name: "칵테일", color: "pink" }, { name: "열대", color: "green" }] },
      },
    },
    {
      id: "mock-06",
      properties: {
        Name: { title: [{ plain_text: "호세 쿠에르보 실버" }] },
        Name_en: { rich_text: [{ plain_text: "Jose Cuervo Especial Silver" }] },
        Proof: { number: 38 },
        Category: { select: { name: "데킬라", color: "yellow" } },
        Country: { rich_text: [{ plain_text: "멕시코" }] },
        Brewery: { rich_text: [{ plain_text: "Jose Cuervo" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(60) } }] },
        Tags: { multi_select: [{ name: "샷", color: "red" }, { name: "마가리타", color: "green" }] },
      },
    },
    {
      id: "mock-07",
      properties: {
        Name: { title: [{ plain_text: "헨드릭스 진" }] },
        Name_en: { rich_text: [{ plain_text: "Hendrick's Gin" }] },
        Proof: { number: 41.4 },
        Category: { select: { name: "진", color: "blue" } },
        Country: { rich_text: [{ plain_text: "스코틀랜드" }] },
        Brewery: { rich_text: [{ plain_text: "William Grant & Sons" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(70) } }] },
        Tags: { multi_select: [{ name: "플로럴", color: "pink" }, { name: "오이향", color: "green" }] },
      },
    },
    {
      id: "mock-08",
      properties: {
        Name: { title: [{ plain_text: "발베니 12년 더블우드" }] },
        Name_en: { rich_text: [{ plain_text: "The Balvenie 12 DoubleWood" }] },
        Proof: { number: 40 },
        Category: { select: { name: "위스키", color: "yellow" } },
        Country: { rich_text: [{ plain_text: "스코틀랜드" }] },
        Brewery: { rich_text: [{ plain_text: "The Balvenie Distillery" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(80) } }] },
        Tags: { multi_select: [{ name: "싱글몰트", color: "brown" }, { name: "달콤한", color: "orange" }] },
      },
    },
    {
      id: "mock-09",
      properties: {
        Name: { title: [{ plain_text: "모엣 샹동 임페리얼" }] },
        Name_en: { rich_text: [{ plain_text: "Moët & Chandon Impérial" }] },
        Proof: { number: 12 },
        Category: { select: { name: "샴페인", color: "yellow" } },
        Country: { rich_text: [{ plain_text: "프랑스" }] },
        Brewery: { rich_text: [{ plain_text: "Moët & Chandon" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(90) } }] },
        Tags: { multi_select: [{ name: "버블", color: "lightgray" }, { name: "파티", color: "pink" }] },
      },
    },
    {
      id: "mock-10",
      properties: {
        Name: { title: [{ plain_text: "산타 리타 120 카베르네" }] },
        Name_en: { rich_text: [{ plain_text: "Santa Rita 120 Cabernet Sauvignon" }] },
        Proof: { number: 13.5 },
        Category: { select: { name: "레드와인", color: "red" } },
        Country: { rich_text: [{ plain_text: "칠레" }] },
        Brewery: { rich_text: [{ plain_text: "Santa Rita" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(100) } }] },
        Tags: { multi_select: [{ name: "탄닌", color: "purple" }, { name: "과일향", color: "red" }] },
      },
    },
    {
      id: "mock-11",
      properties: {
        Name: { title: [{ plain_text: "아사히 슈퍼 드라이" }] },
        Name_en: { rich_text: [{ plain_text: "Asahi Super Dry" }] },
        Proof: { number: 5.0 },
        Category: { select: { name: "라거", color: "green" } },
        Country: { rich_text: [{ plain_text: "일본" }] },
        Brewery: { rich_text: [{ plain_text: "Asahi Breweries" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(110) } }] },
        Tags: { multi_select: [{ name: "드라이", color: "lightgray" }, { name: "청량감", color: "blue" }] },
      },
    },
    {
      id: "mock-12",
      properties: {
        Name: { title: [{ plain_text: "잭 다니엘 테네시 위스키" }] },
        Name_en: { rich_text: [{ plain_text: "Jack Daniel's Old No.7" }] },
        Proof: { number: 40 },
        Category: { select: { name: "위스키", color: "yellow" } },
        Country: { rich_text: [{ plain_text: "미국" }] },
        Brewery: { rich_text: [{ plain_text: "Jack Daniel Distillery" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(120) } }] },
        Tags: { multi_select: [{ name: "스모키", color: "gray" }, { name: "바닐라", color: "yellow" }] },
      },
    },
    {
      id: "mock-13",
      properties: {
        Name: { title: [{ plain_text: "캠파리" }] },
        Name_en: { rich_text: [{ plain_text: "Campari" }] },
        Proof: { number: 25 },
        Category: { select: { name: "리큐어", color: "red" } },
        Country: { rich_text: [{ plain_text: "이탈리아" }] },
        Brewery: { rich_text: [{ plain_text: "Davide Campari-Milano" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(130) } }] },
        Tags: { multi_select: [{ name: "쓴맛", color: "red" }, { name: "칵테일", color: "pink" }] },
      },
    },
    {
      id: "mock-14",
      properties: {
        Name: { title: [{ plain_text: "코로나 엑스트라" }] },
        Name_en: { rich_text: [{ plain_text: "Corona Extra" }] },
        Proof: { number: 4.5 },
        Category: { select: { name: "라거", color: "green" } },
        Country: { rich_text: [{ plain_text: "멕시코" }] },
        Brewery: { rich_text: [{ plain_text: "Cervecería Modelo" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(140) } }] },
        Tags: { multi_select: [{ name: "라임", color: "green" }, { name: "여름", color: "yellow" }] },
      },
    },
    {
      id: "mock-15",
      properties: {
        Name: { title: [{ plain_text: "말리부 코코넛 럼" }] },
        Name_en: { rich_text: [{ plain_text: "Malibu Coconut Rum" }] },
        Proof: { number: 21 },
        Category: { select: { name: "리큐어", color: "blue" } },
        Country: { rich_text: [{ plain_text: "바베이도스" }] },
        Brewery: { rich_text: [{ plain_text: "Pernod Ricard" }] },
        Picture: { files: [{ file: { url: PLACEHOLDER(150) } }] },
        Tags: { multi_select: [{ name: "코코넛", color: "orange" }, { name: "달콤한", color: "pink" }] },
      },
    },
  ],
};

export const getMockDetail = (id: string): DrinkItem | undefined =>
  MOCK_LIST.results.find((item) => item.id === id);
