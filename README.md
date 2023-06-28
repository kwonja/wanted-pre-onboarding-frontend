# 원티드 프리온보딩 프론트엔드 - 6월 선발 과제

## 이름
- 권성민

## 배포
- netify를 사용해 배포했습니다.
- 링크 : https://main--steady-jalebi-27e289.netlify.app/

## git clone 후 실행방법
 ```zsh
 cd wanted-pre-onboarding-frontend
 $ npm install
 $ npm start
 ``` 

## 프로젝트 구조
```
📦 src
├── 📂 apis
│   ├── 📄 auth.js
│   ├── 📄 config.js
│   └── 📄 todo.js
└── 📂 component
    ├── 📂 login
    │    ├── 📄 Signin.jsx
    │    └── 📄 Signup.jsx
    └── 📂 todo
         ├── 📄 Todo.jsx
         └── 📄 TodoItem.jsx
```
## 데모영상 GIF

### ✅ Assignment 1 & Assignment 2

  ![회원가입](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/0d53d5f8-b04f-4c4a-9f0f-7d9998dc89f8)
### ✅ Assignment 3

 ![로그인](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/209dbdb3-e7f3-42a7-86b8-7dc191932d85)
### ✅ Assignment 4
- 토큰이 없는상태

![ezgif com-video-to-gif](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/b453906a-8f4b-43d3-b136-07219ab6de4c)
- 토큰이 있는상태

![ezgif com-video-to-gif (1)](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/b4c2b1a2-e562-473f-b5dd-4176f2108f0e)

### ✅ Assignment 5 & 6

![추가](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/a0eab880-039e-416a-9707-2a8f51e35a24)

### ✅ Assignment 7 & 8 & 10

![수정](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/35be8e94-f64d-4a94-ad09-4f202efe719b)

### ✅ Assignment 9
 
![삭제하기](https://github.com/kwonja/wanted-pre-onboarding-frontend/assets/42410000/d40c64a6-bf65-45ff-9de0-2a84218db925)
### ✅ 로그아웃 추가 구현
## 사용 기술
- React
- Styled Components
- axios
- react-router-dom

## 로컬 서버 구동

- 배포된 API에 문제가 있는 경우 활용할 수 있는 로컬 서버 구동법입니다.
- 로컬 서버는 sqlite에 의존성이 있습니다.

### 설치 및 실행

```zsh
$ npm install
$ npm start
```

- 위 순서대로 실행하면 localhost:8000 포트에 서버가 실행됩니다.
- 서버를 실행하면 db.sqlite 파일이 생성되며 해당 파일을 삭제 시 기존의 데이터는 초기화 됩니다.
- 그 외 스펙은 배포된 API와 동일합니다.
