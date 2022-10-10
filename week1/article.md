# 웹 접근성

> 접근성이란?

웹 사이트에서 제공하는 정보를 신체적, 환경적 조건에 관계없이 동등하게 이용할 수 있도록 보장하는 것입니다.

- 신체적 조건
  - 일반 사용자, 장애를 가진 사람, 고령자
- 환경적 조건
  - PC,Mobile,OS,웹 브라우저(IE, Chorme, Safari, FireFox ..)

<br>

> 접근성을 위한 개발

- 시멘틱 태그 사용
- 모든 기능은 키보드를 통해 접근

  - div로 버튼을 만들기보다는 button 태그를 활용하자
    - div로 만든 버튼은 탭으로 이동이 불가능

- 텍스트를 이미지화해서 적용
  - 폰트와 관련된 개발을 할 수 없다
    - 큰 글씨 설정, 화면 낭독기, 다국어 변환을 하지 못하게 되어 시각장애인의 경우에 정보를 전혀 얻을 수 없다.
    - 아마존, 애플 등 접근성을 고려하는 기업에서는 텍스트의 이미지화를 하지 않는다.

<br>

- 버튼 조작 범위를 넓게

- 오류메시지에서는 해결 방법도 같이 표기

- 텍스트 가독성을 위한 디자인 설계

  - 텍스트의 색과 배경색의 명도를 대비시켜 가독성 향상
    <img width="500" alt="스크린샷 2022-10-03 오후 4 10 23" src="https://user-images.githubusercontent.com/69576360/193520312-6d09426d-73ae-4772-8226-56d2fc0d1fc7.png">

<br>

- 반드시 필요한 정보 제공 및 절차 간소화

  - active-x 제거에 대한 움직임이 있다.

<br>

- 사진 이미지에 구체적인 대체 텍스트 적용
  <img width="500" alt="스크린샷 2022-10-03 오후 4 18 58" src="https://user-images.githubusercontent.com/69576360/193521179-6cc51daa-1997-42ac-85e2-f8eac2ccff48.png">

<br>

- 인증 번호와 같이 시간 제한이 있는 경우 응답시간 연장 기능 제공
  <img width="500" alt="스크린샷 2022-10-03 오후 4 25 15" src="https://user-images.githubusercontent.com/69576360/193522263-62dcf0ca-fd2d-44b6-a864-746bb860c6d6.png">

<br>

> 접근성을 지키면서 개발을 꼭 해야 할까요?

- 웹 접근성에 대해 깊게 생각해 본 적도, 개발에 적용하려고 생각해 본 적도 없었다.
  접근성에 대해 알아보며 많은 사이트에서 당연하게 쓰고 있었던 부분이 접근성에 관련된 요소였다는 것을 알게 되었고, 특히 모든 기능을 키보드를 통해 접근 가능하게 해야 한다는 사실이 가장 많이 와닿았던 것 같다.

- 앱으로 하는 서비스가 많지만 많은 패키징 툴로 웹도 모바일 환경에서 볼 수 있게 되었고 무엇보다 웹 보편성을 위해, 사이트를 모든 사람이 간편하고 쉽게 사용할 수 있게 하는 개발은 이제 필수가 된 것 같다.

## 출처

https://blog.toss.im/article/tinyquestions-disability-3 <br>
https://seulbinim.github.io/WSA/accessibility <br>
https://a11y.gitbook.io/wcag/2-operable/2.2-enough-time <br>
https://developers.google.com/search/docs/advanced/guidelines/google-images?hl=ko <br>
