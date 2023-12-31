# 리액트 영단어 암기장 프로젝트 튜터링
* 활동 기간 : 2023.08.08 ~ 2023.8.31
* 활동 장소 : 5409호실

## 튜터링 목표
- React의 기본 구조 알고 사용해보기
- 영단어 암기 사이트 스스로 구현해보기

## 주차별 학습 계획
| 주차 | 활동날짜 | <center>활동 내용</center> | <center>자료 다운로드</center> |
| :------: | :------: | :------ | :------ |
| 1 | 8월 8일 (화)|  1. 설치</br> 2. 프로젝트 생성</br> 3. Component 만들기</br> 4. CSS 작성</br> 5. Event 처리|[[PPT]](https://github.com/ksw06086/React_tutoring/raw/main/PPT/리액트_강의_1주차.pptx)|
| :------: | :------: | :------ | :------ |
| 2 | 8월 16일 (수)|  1. State(useState() 사용)</br> 2. Props 사용</br> 3. 본격적 페이지 만들기</br> 3-1. map() 사용</br> 3-2. 라우팅 구현</br> 3-3. 체크박스, 뜻 보기, 삭제 버튼 생성|[[PPT]](https://github.com/ksw06086/React_tutoring/raw/main/PPT/리액트_강의_2주차.pptx)|
| :------: | :------: | :------ | :------ |
| 3 | 8월 22일 (화)|  ** css 적용, json-server 설치</br> 1. useEffect, fetch 사용</br> 2. Custom Hook 만들기</br> 3. PUT: 단어 암기 여부 저장</br> 4. DELETE: 단어 삭제</br> 5. POST: 단어/날짜 추가</br> 5-1. useHistory로 경로 이동</br> 5-2. useRef로 추가 내용 전송|[[PPT]](https://github.com/ksw06086/React_tutoring/raw/main/PPT/리액트_강의_3주차.pptx) [[REVIEW]](https://forms.gle/5TswmaYna6h5hFCMA)

## 리액트 Word.js 수정 사항
- 기존 : function del() { ... ... if(word.id === 0){ return null; } }
- 변경 : function del() { ... ... } if(word.id === 0){ return null; }
- 화면에서도 작동 됨
