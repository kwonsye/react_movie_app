# ReactJS로 Movie App page 만들기
- 깃허브 static 페이지

    <http://kwonsye.github.io/react_movie_app/>
- create-react-app 사용
    - 서버 포트 : 3000번
    - `yarn start`
- fontend : React
    - index.js : index.html 의 `root`에 `<App />` render
    - App.js (App Component)
        - `componentDidMount()` : 영화 데이터를 fetch해서 setState하는 `_getMovies()` 호출
        - `_getMovies()` : `_callApi()` 호출 후 `this.state.movies`에 setState
        - `_callApi()` : AJAX로 api 데이터 fetch
        - `this.state.movies` 확인 후 `_renderMovies()` 호출
        - `_renderMovies()` : `state.movies`의 movie들을 `<Movie />`로 render하게 함.
    - Movie.js
        1. Movie Component : props로 넘어온 movie 하나당 `<MoviePoster />`, `props.title` , `<MovieGenre />`, `props.synopsis` render
            - `toggleModal()` :  시놉시스div를 onClick 시 `isOpen`을 반대로 setState해주고, `<Modal />` 모달창을 띄운다.

        2. MoviePoster Component : smart component, `props.poster`로 `<img/>` render
        3. MovieGenre Component : dumb component, `props.genre` return

    - Modal.js (Modal Component)
        - 전체 `synopsis`를 모달창에서 보여준다.
        - `props.show == false` 면 모달창을 안보이게
        - `props.show == true` 면 모달창을 보이게
        - close 버튼을 onClick하면 `props.onClose`에 매핑되어있는 `toggleModal()`호출

    -


- github page 에 배포하기
    - static file인 html, js, css파일을 호스팅해준다.
```
yarn build //코드를 압축,최적화

//package.json 파일에 추가
"homepage" : "http://kwonsye.github.io/react_movie_app" 

yarn build

yarn add --dev gh-pages //github branch이름은 반드시 gh_pages

//package.json 파일에 추가
    "scripts": {
      // ...
      "predeploy": "yarn build",
      "deploy": "gh-pages -d build"
    }

yarn run deploy 
//visit http://kwonsye.github.io/react_movie_app/ !!
```

## 추가로 공부해야 할 부분
1. CSS
    - Movie.css `@media screen` 의미
    - `display : flex`
    - Modal.css
        - `.backdrop` : 모달div를 제외한 전체 화면 style, `position : fixed`
        - `.modal` : 모달div style, `posistion : relative`
        - close 버튼 css참고한 사이트
        
            <https://nanati.me/css-button-design/> 
        - close 버튼 hover하면 nth-child(2),nth-child(3)가 바뀌는 원리 : `transition`, `transform`
        - `position`
        - `box-sizing`