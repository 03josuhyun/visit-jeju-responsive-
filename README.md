# 비짓제주 리뉴얼 사이트

## 프로젝트 소개
<img width="1920" height="917" alt="image 156" src="https://github.com/user-attachments/assets/c7454c56-e99c-4941-ab86-33ba6cddbab3" />

### 제작기간 
팀플 기획 기간 : 2026.06.30 ~ 2026.07.10 (10일)
코딩 기간 : 2026.07.10 ~ 2026.07.24 (14일)

### 📋 기획의도 
제주도는 2026년 세계 25대 여행지로 선정되며 글로벌 휴양지로 주목받고 있으나, 최근 내국인 여행객 감소와 개별 여행 트렌드로 인해 실제 관광 수익은 줄어들고 있는 상황입니다. 그래서 이 프로젝트는 **비짓제주(Visit Jeju) 홈페이지 리뉴얼**을 통해 제주의 향토음식, 문화, 특산품을 적극적으로 노출하여 국내외 관광객의 접근성을 높이고, 궁극적으로 **국내외 관광객 유치 및 지역 관광 수익을 극대화**하고자 기획되었습니다.

### 💡 핵심 기능
* **K-Artist Pick**
  * 글로벌 관광객을 위한 유명 아티스트 기반 맛집 및 드라마·영화 촬영지 정보 제공
  * 아티스트별 추천 정보를 한눈에 파악할 수 있도록 탭 형식의 화면으로 제공
* **지금 우리 제주는**
  * 텍스트와 아이콘 이미지를 활용하여 대표적인 제주도 행사 및 축제 정보 제공
  * 각 테마별 정보를 직관적이고 가시성 높게 탐색하는 카드 슬라이드 형식 활용
* **오름길**
  * 제주도 오름길 지도를 코스별로 분류하여 원하는 경로에 대한 상세 정보 제공
  * 여행객의 편의를 위해 경로 주변의 화장실, 주차장 등 필수 편의시설 위치 노출


### 🛠 사용한 기술 (Tech Stack)
본 프로젝트는 별도의 라이브러리, 프레임 워크 없이 웹 표준 기술만을 활용한 **Vanila JS** 환경에서 구현되었습니다.
* **HTML** : 시맨틱 태그를 활용한 웹 페이지 구조 설계
* **CSS3** : 모듈화된 스타일시트 운영 ('header','footer','index','sub' 분리) 및 반응형 레이아웃 구형
* **JavaScript(ES56+)** : DOM 조작 및 동적 UI 컴포넌트(슬라이드, 탭 메뉴 등) 기능 구현

### ⚙ 디렉토리 구조 (Directory Structure)
```
├ img : #웹 사이트에 사용된 이미지 자산 폴더
├ index.html : 메인 페이지 화면
├ index.css : 메인 페이지 스타일 
├ index.js : 메인 페이지 동적 스크립트
├ sub.html : 서브 페이지 화면 (상세 기능 및 정보 제공)
├ sub.css : 서브 페이지 스타일
├ sub.js : 서브 페이지 동적 스크립트
├ header.css : 공통 상단 헤더 스타일
├ footer.css : 공통 하단 푸터 스타일
└ README.html : 프로젝트 설명 문서
```

###  프로젝트 아키텍처 (Project Architecture)
1. 클라이언트 (사용자 브라우저) : 사용자가 크롬 같은 브라우저로 사이트에 접속합니다.
2. 화면 및 스타일 레이아웃 (HTML5/CSS3) : 웹 표준 구조를 기반으로 공통 요소(header, footer)와 각 페이지 (index, sub)의 레이아웃 및 스타일을 브라우저에 시각적으로 뿌려줍니다.
3. 동적 인터랙션 및 제어 (Vanilla JS) : 사용자가 화면에서 탭 메뉴를 클릭하거나 행사 슬라이드를 넘길때, 자바 스크립트가 DOM(화면요소)을 직접 제어하여 실시간으로 화면을 변경합니다.

### 핵심 트러블슈팅 (Troubleshooting)
* **Vanilla JS 컴포넌트화 및 상태 관리 고민**
  * 문제 : 프레임워크 없이 개발하다 보니 각 페이지(index, sub)에서 공통 UI(헤더, 푸터)를 중복 호출하고 상태를 동기화하는 데 어려움이 있습니다.
  * 해결*** : 중복되는 HTML 요소를 자바 스크립트 함수형 컴포넌트로 분리하고, DOM이 로드될 때 동적으로 주입하는 방식으로 재사용성을 높였습니다.

### 코드 리뷰 & 리팩토링 (Code Review)

<details>
<summary> 🔍 현재 작성된 하트 버튼 상태 관리 코드 </summary>

<pre><code class="language-javascript">
let index = false;

$('.heart').on('click', function () {
  if (index === false) {
    $(this).find('i').css({ color: 'var(--point-color)' });
    index = true;
  } else {
    $(this).find('i').css({ color: "var(--white)" }); 
    index = false;
  }
});
</code></pre>
<blockquote>
  <strong>⚠️ 셀프 체크 및 논의하고 싶은 점 (Issue & Question)</strong><br>
  <ul>
    <li><strong>개별 상태 관리 오류:</strong> 현재 모든 하트 버튼이 하나의 <code>index</code> 변수를 공유하고 있어서, 카드 하나를 누르면 다른 카드들의 하트 상태까지 동시에 변하는 문제가 있습니다. 각 하트 버튼이 독립적으로 토글되게 하려면 데이터셋(dataset)을 쓰는 게 좋을지, 혹은 다른 좋은 컴포넌트 분리 방식이 있을지 의견을 구하고 싶습니다.</li>
    <li><strong>이벤트 위임 적용 여부:</strong> 카드 슬라이더 내부 요소가 늘어날 때 성능 최적화를 위해 탭 메뉴처럼 부모 요소에 이벤트 위임을 적용해야 할지 고민입니다.</li>
    <li><strong>문법 오타 확인:</strong> <code>"var(--white"</code> 부분에 닫는 괄호 <code>)</code>가 누락된 것을 확인하여 이 부분은 반영할 예정입니다.</li>
  </ul>
</blockquote>

</details>

<details>
<summary>🔍 현재 작성된 메뉴 레이블 코드(index.html)</summary>

<pre><code class="language-html">
&lt;label for="gnb01" class="gnb01"&gt;
  제주 동부 &lt;i class="fa-solid fa-angle-down"&gt;&lt;/i&gt;
&lt;/label&gt;
</code></pre>

<blockquote>
  <strong>⚠️ 셀프 체크 및 논의하고 싶은 점 (Issue & Question)</strong><br>
  <ul>
    <li><strong>연결 대상(gnb01) 누락 문제:</strong> <code>for="gnb01"</code>로 연결될 <code>id="gnb01"</code>을 가진 checkbox 입력(input) 요소가 상단 선언부에 누락되어 있는 것을 발견했습니다. (현재 gnb02부터 gnb05까지만 존재)</li>
    <li><strong>구조 개선 고민:</strong> 이 레이블을 체크박스 제어용으로 사용하려던 것이라면 누락된 input 요소를 추가해야 합니다. 하지만 현재 하위 메뉴가 jQuery 클릭 이벤트로도 열리도록 작성되어 있어 기능이 중복되는 상태입니다.</li>
    <li><strong>리뷰 요청 사항:</strong> 마크다운 레이블 구조를 그대로 유지하면서 input을 추가하는 게 좋을지, 아니면 jQuery 제어에 맞춰 불필요한 레이블 구조를 과감히 <code>&lt;button&gt;</code> 태그로 변경하는 것이 마크업 표준에 더 맞을지 의견을 구하고 싶습니다.</li>
  </ul>
</blockquote>

</details>

<h4></h4>
<details>
<summary>🔍 현재 작성된 유튜브 링크 코드(index.html)</summary>

<pre><code class="language-html">
&lt;a href="https://www.https://://youtube.com"&gt;
  &lt;img src="./img/news09.jpg" alt=""&gt;
&lt;/a&gt;
</code></pre>

<blockquote>
  <strong>⚠️ 셀프 체크 및 리팩토링 포인트 (Issue & Bug Fix)</strong><br>
  <ul>
    <li><strong>프로토콜 중복 오류:</strong> <code>href</code> 주소 내부에 <code>https://www</code> 프로토콜이 중복으로 들어가 있는 것을 발견했습니다. 이로 인해 링크를 클릭했을 때 올바른 페이지로 이동하지 않고 404 에러가 발생하게 됩니다.</li>
    <li><strong>수정 계획:</strong> 중복된 프로토콜 주소를 제거하고 실제 유튜브 영상 주소(<code>https://://youtube.com</code>)로 정상 연결되도록 수정할 예정입니다.</li>
  </ul>
</blockquote>

</details>

<h4></h4>

<details>
<summary>🔍 코드 보기(클릭하여 펼치기)</summary>

<h4>⚠️ 검토 및 개선이 필요한 이벤트 코드 (index.js)</h4>
<pre><code class="language-javascript">
$('.active').on({
  mouseenter: function () {
    $(this).find('.active_text').stop(true, true).fadeIn(200);
  },
  mouseleave: function () {
    $(this).find('.active_text').stop(true, true).fadeOut(200);
  }
});
</code></pre>

<blockquote>
  <strong>💬 셀프 체크 및 리팩토링 제안 (유지보수성 개선 의견)</strong><br>
  <ul>
    <li><strong>클래스 이름(Active) 역할 중복:</strong> 현재 <code>.active</code>라는 클래스명이 '축제 아코디언의 활성화 상태'와 '액티비티 카드 자체의 이름'으로 혼용되어 모두 사용되고 있습니다.</li>
    <li><strong>잠재적 버그 위험:</strong> 이로 인해 위 스크립트 이벤트가 문서 내의 의도하지 않은 다른 <code>.active</code> 요소에까지 전부 등록되어 오작동을 일으킬 우려가 있습니다.</li>
    <li><strong>리뷰 요청 사항:</strong> 클래스명의 역할이 겹쳐 유지보수가 어려워질 수 있으므로, 액티비티 카드 컴포넌트에는 <code>.activity-card</code> 같은 별도의 고유 클래스명을 부여해 이벤트 대상을 명확하게 구분하는 구조로 개선하면 어떨지 의견을 구합니다.</li>
  </ul>
</blockquote>

</details>

<h4></h4>

### 실행 방법 (Getting Started)
1. 이 저장소를 클론(Clone)하거나 ZIP 파일로 다운로드 합니다.
2. 폴더 내의 `index.html` 파일을 더블 클릭하여 웹 브라우저에서 실행합니다.

### 🔗 배포 링크 (Live Demo)
[비짓제주 리뉴얼 사이트 바로가기](https://03josuhyun.github.io/visit-jeju-responsive-/)
