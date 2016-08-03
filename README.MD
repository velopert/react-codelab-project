# CodeLab-React-Fundamentals

## About

React 기본 작업 환경
- babel 을 통한 ES6 변환
- webpack-dev-server 사용
- react-hot-loader 를 통한 Hot Module Reload 사용

React CodeLab 에서 작업환경 설정을 할 때 사용 된 코드 입니다.


## 설치하기

```sh
git@github.com:velopert/react-codelab-fundamentals.git
npm install -g webpack webpack-dev-server
npm install
# npm install 과정이 오래 걸린다면, 다음과 같이 node_modules.zip 을 다운로드 받아서 압축을 해제하세요:
wget https://github.com/velopert/react-codelab-fundamentals/releases/download/1.0/node_modules.zip
unzip node_modules.zip -d node_modules
```

## 실행하기

```
npm run dev-server
```

서버는 포트 8081 으로 실행됩니다. 변경은 webpack.config.js 에서 할 수 있습니다.
