# issues-page

- 팀원

김지원, 안주현, 오주연, 이대경, 정수현, 전경미

- 사용 기술 스택
  <img src="https://img.shields.io/badge/REACT-색상?style=for-the-badge&logo=REACT&logoColor=white">

- 프로젝트 설명
  깃허브 open api를 활용하여 이슈 목록을 조회하는 웹 페이지를 만들었습니다.

- 기능 설명

1. 페이지네이션
   맨처음/마지막, 이전/다음 버튼으로 현재 페이지에서 이동 가능하며 현재 페이지의 버튼은 포커스 되어있습니다.
2. 상세 페이지
   화면에 나열되어있는 이슈 목록을 클릭 시 해당 이슈 목록의 상세 내용을 확인할 수 있는 페이지로 이동됩니다.
3. 필터링 기능
   - 생성순, 업데이트순, 댓글순으로 이슈 목록이 정렬됩니다.
   - 페이지 개수를 설정할 수 있습니다. (10/20/50개씩, 원하는 개수만큼 페이지에 보이도록 지정 가능)
4. 로딩 페이지
   - 이슈 목록이 화면에 랜더링 되기 이전 로딩 중 메세지가 뜨도록 했습니다.

- 구현 실패, 버그 내용

1. 페이지네이션과 필터링에서 뒤로가기 기능 구현 실패
2. 2페이지에서 필터링 기능 이용시 적용안됨.

- 프로젝트 폴더 구조

  - store, reducer : 전역 상태관리를 위한 폴더입니다.
  - route : 페이지 이동을 위한 폴더입니다.
  - theme : 미디어 쿼리 적용을 위한 폴더입니다.

  - issuesList : 이슈 목록 조회 기능들이 담겨있는 폴더입니다
    - components : 이슈 목록 조회, 페이지네이션, 필터링 기능
    - detailPage : 상세 페이지 기능
    - loadingPage : 로딩 페이지 기능

- 코드 컨벤션
  표기법 : 카멜 케이스
  이벤트 함수 앞에는 on을 붙혀준다

- 깃허브 커밋 컨벤션
  feat : 새로운 기능
  fix : 버그 수정
  docs : 문서 수정
  style : 레이아웃, 코드 스타일 수정
  refactor : 기능, 코드 개선
  test : 테스크 추가/수정
  chore : 프로덕션 외 다른 코드 수정

- 배포 주소
  https://issues-page-delta.vercel.app/
