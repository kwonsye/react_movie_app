(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(29)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),r=n.n(o),i=(n(17),n(6)),c=n.n(i),l=n(9),u=n(1),p=n(2),m=n(4),h=n(3),v=n(5),d=(n(21),n(23),n(10)),f=n.n(d),b=(n(27),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.show?s.a.createElement("div",{className:"backdrop"},s.a.createElement("div",{className:"modal"},this.props.content,s.a.createElement("p",null),s.a.createElement("div",{className:"button_base b03_skewed_slide_in",onClick:this.props.onClose},s.a.createElement("div",null,"cancel"),s.a.createElement("div",null),s.a.createElement("div",null,"cancel")))):null}}]),t}(a.Component)),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={isOpen:!1},n.toggleModal=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Movie"}," ",s.a.createElement("div",{className:"Movie__Column"},s.a.createElement(_,{poster:this.props.poster,alt:this.props.title})),s.a.createElement("div",{className:"Movie__Column"},s.a.createElement("h1",null,this.props.title),s.a.createElement("div",{className:"Movie__Genres"},this.props.genres.map(function(e,t){return s.a.createElement(O,{genre:e,key:t})})),s.a.createElement("div",{className:"Movie__Synopsis",onClick:this.toggleModal},s.a.createElement(f.a,{text:this.props.synopsis,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})),s.a.createElement(b,{show:this.state.isOpen,onClose:this.toggleModal,content:this.props.synopsis})))}}]),t}(a.Component);function O(e){var t=e.genre;return s.a.createElement("span",{className:"Movie__Genre"},t," ")}var _=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("img",{src:this.props.poster,className:"Movie__Poster",alt:this.props.alt,title:this.props.alt})}}]),t}(a.Component),j=g,E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e){return s.a.createElement(j,{title:e.title,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return s.a.createElement("div",{className:e?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading..."," ")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.7e616dff.chunk.js.map