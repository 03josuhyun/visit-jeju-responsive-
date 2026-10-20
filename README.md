# 비짓제주 리뉴얼 사이트

## 프로젝트 소개
<img width="1920" height="917" alt="image 156" src="https://github.com/user-attachments/assets/c7454c56-e99c-4941-ab86-33ba6cddbab3" />

## 제작기간 
팀플 기획 기간 : 2026.06.30 ~ 2026.07.10 (10일)
코딩 기간 : 2026.07.10 ~ 2026.07.24 (14일)

## 📋 기획의도 
제주도는 2026년 세계 25대 여행지로 선정되며 글로벌 휴양지로 주목받고 있으나, 최근 내국인 여행객 감소와 개별 여행 트렌드로 인해 실제 관광 수익은 줄어들고 있는 상황입니다. 그래서 이 프로젝트는 **비짓제주(Visit Jeju) 홈페이지 리뉴얼**을 통해 제주의 향토음식, 문화, 특산품을 적극적으로 노출하여 국내외 관광객의 접근성을 높이고, 궁극적으로 **국내외 관광객 유치 및 지역 관광 수익을 극대화**하고자 기획되었습니다.

## 💡 핵심 기능
* **K-Artist Pick**
  * 글로벌 관광객을 위한 유명 아티스트 기반 맛집 및 드라마·영화 촬영지 정보 제공
  * 아티스트별 추천 정보를 한눈에 파악할 수 있도록 탭 형식의 화면으로 제공
* **지금 우리 제주는**
  * 텍스트와 아이콘 이미지를 활용하여 대표적인 제주도 행사 및 축제 정보 제공
  * 각 테마별 정보를 직관적이고 가시성 높게 탐색하는 카드 슬라이드 형식 활용
* **오름길**
  * 제주도 오름길 지도를 코스별로 분류하여 원하는 경로에 대한 상세 정보 제공
  * 여행객의 편의를 위해 경로 주변의 화장실, 주차장 등 필수 편의시설 위치 노출


## 🛠 사용한 기술 (Tech Stack)
본 프로젝트는 별도의 라이브러리, 프레임 워크 없이 웹 표준 기술만을 활용한 **Vanila JS** 환경에서 구현되었습니다.
* **HTML** : 시맨틱 태그를 활용한 웹 페이지 구조 설계
* **CSS3** : 모듈화된 스타일시트 운영 ('header','footer','index','sub' 분리) 및 반응형 레이아웃 구형
* **JavaScript(ES56+)** : DOM 조작 및 동적 UI 컴포넌트(슬라이드, 탭 메뉴 등) 기능 구현

## ⚙ 디렉토리 구조 (Directory Structure)
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

## 코드 리뷰 (Code Review)

**1. 하트 버튼 클릭 시 찜 상태에 따라 아이콘 색상이 변경되도록 구현했습니다**
<img width="391" height="520" style="display: block; margin: 0 auto;" alt="ezgif com-gif-maker" src="https://github.com/user-attachments/assets/a43243d9-6d43-46bb-b729-dc343ac7dcc7" />

```javascript
let index = false;

$('.heart').on('click', function () {
  if (index === false) {
    $(this).find('i').css({ color: 'var(--point-color)' });
    index = true;
  } else {
    $(this).find('i').css({ color: 'var(--white)' });
    index = false;
  }
});
```
* **index** : 하트 버튼의 활성화 상태를 저장
* **on('click')** : 하트 버튼 클릭 이벤트를 등록
* **find('i')** : 클릭한 버튼 내부의 하트 아이콘을 선택
* **css()** : 찜 상태에 따라 아이콘 색상을 변경


**2. 메뉴 레이블을 클릭해 특정 메뉴를 제어할 수 있도록 HTML, JavaScript로 작성했습니다**
```javascript
<label for="gnb01" class="gnb01">
  제주 동부 <i class="fa-solid fa-angle-down"></i>
</label>
```
* **label** : 특정 입력 요소와 연결하기 위한 레이블
* **class"gnb01"** : css 스타일링이나 javascript 선택에 활용


## 실행 방법 (Getting Started)
1. 이 저장소를 클론(Clone)하거나 ZIP 파일로 다운로드 합니다.
2. 폴더 내의 `index.html` 파일을 더블 클릭하여 웹 브라우저에서 실행합니다.

## 🔗 배포 링크 (Live Demo)
[비짓제주 리뉴얼 사이트 바로가기](https://03josuhyun.github.io/visit-jeju-responsive-/)
