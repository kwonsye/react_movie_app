import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render flow : componentWillMount() 호출 -> render() 호출 -> componentDidMount() 호출
  //Update flow : componentWillReceiveProps() -> shouldComponentUpdate() == true 인지 확인 -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {

  }

  //api 에서 영화리스트 fetch 해오기
  componentDidMount(){
    this._getMovies();
  }

  //비동기 : 이전 라인이 끝날때까지 기다리지 않는다.
  _getMovies = async () => {
    const movies = await this._callApi(); //await: _callApi()가 완료되기를 기다린다. async와 같이 사용해야한다.
    //console.log(movies)
    this.setState({
      movies : movies,
    })
  }

  _callApi = () =>{
    //AJAX : Asynchronous Js and XML , url을 자바스크립트로 비동기화방법으로 불러옴, 뭔가를 불러올때마다 페이지 새로고침을 하고 싶지 않으므로 AJAX를 사용한다. js같이 데이터를 다룰 수 있다.
    //promise : 비동기 AJAX 컨셉
    //1.다른 작업이 끝나고 차례대로(동기) 불러오는 것이 아니고 다른 수행과 상관없이 다른 작업을 스케줄 해놓을 수 있다.
    //2.시나리오가 생기고 이를 관리할 수 있게 된다.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') //url을 AJAX로 불러온다.
      .then(response => response.json()) //위에서 내려온 결과를 json형태로 바꿔라
      .then(json => json.data.movies) //위에서 내려온 결과를 리턴한다.
      .catch(err => { console.log(err)}) //에러 나면 여기로!
  }

  //컴포넌트가 mount된 후에 2초후에 state를 업데이트 시켜준다. -> state가 업데이트되면 render() 다시 호출되서 그려줌
  /*
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          //...this.state.movies, //destruction: 기존의 영화리스트를 가져오고, 2초 뒤에 새로운 영화를 추가해준다.
          {
            title:"Wonder",
            poster:"http://mblogthumb3.phinf.naver.net/MjAxODAxMTVfNTEg/MDAxNTE2MDA0MjM2MzQ4.Y1si1zbaAq5s5xjOhMDgYRZrhXXMkK2sE4ka1hkI5W8g.Whb0VKBm1HmkaLB-8zte3ChzsS8W1EeZcso0_uObkvEg.JPEG.mes194/movie_image-39.jpg?type=w800"
          },
          {
            title:"LaLaLand",
            poster:"http://t1.daumcdn.net/liveboard/looksofine/0cd51deb5fbb4bd79f08536321a799c3.JPG"
          },
          {
            title:"August Rush",
            poster:"https://is3-ssl.mzstatic.com/image/thumb/Video69/v4/13/1a/c3/131ac374-2b13-b3a8-ef48-d833261a9b51/pr_source.lsr/268x0w.png"
          },
          {
            title:"Ratatouille",
            poster:"http://cfile203.uf.daum.net/image/2116A44555B646E31FA67F"
          },
          {
            title: "ZooTopia",
            poster:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4968/4968501_sa.jpg;maxHeight=640;maxWidth=550"
          },
          {
            title: "Frozen",
            poster: "https://grooveimage.files.wordpress.com/2014/01/frozen-movie-poster.jpg"
          }
        ]
      })
    }, 2000);
  }
  */

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => { /*array.map(callback) array의 각각의 원소를 callback으로 매핑해서 새로운 array를 반환한다. */
      /*index는 사이클에 따라서 원소의 인덱스로 알아서 바뀐다. map()에서는 반드시 원소마다 독립적인 key를 줘야함*/
      //컴포넌트의 key로 index를 주는 것은 느리므로 지양!
      return <Movie title={movie.title} 
                    poster={movie.medium_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    synopsis={movie.synopsis}></Movie>
   })

   return movies;
  }

  render() {
    const {movies} = this.state;
    return (
      <div className = {movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies():'Loading...' } {/* movies state가 있으면 _renderMovies() 없으면 로딩*/}
      </div>
    );
  }

  
}

export default App;
