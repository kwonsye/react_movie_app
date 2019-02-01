import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import Modal from './Modal';


class Movie extends Component{

    /* 부모컴포넌트에서 받은 정보가 원하는 자료형이 맞는지 검사한다. */
    static propTypes = {
        title:PropTypes.string.isRequired, //부모컴포넌트에서 title이라는 prop은 꼭 넘어오도록 요구한다.
        poster:PropTypes.string,
        genres:PropTypes.array.isRequired,
        synopsis:PropTypes.string.isRequired,
    }

    state = {
        isOpen:false,
    }

    render(){
        return(
            <div className="Movie">
                {/* console.log(this.props) */} {/*넘어오는 props 다 찍어보기*/}
                <div className= "Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}></MoviePoster>
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre,index) => <MovieGenre genre={genre} key={index}></MovieGenre>)}
                    </div>
                    <div className="Movie__Synopsis" onClick={this.toggleModal}>
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                        <Modal show={this.state.isOpen} onClose={this.toggleModal} content={this.props.synopsis}>
                        </Modal>
                    </div>
                    
                </div>

            </div>            
        )
    }

    toggleModal = ()=>{
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
}


function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

MovieGenre.propTypes={
    genre : PropTypes.string.isRequired,    
}

/*
//Movie 의 Dumb Component -> render() 없음, update() 불가, return만 있음
function Movie({poster,title}){ //파라미터의 순서는 상관없음. 부모 컴포넌트에서 보내주는 변수명과 같게만 써주면 된다.
    return(
        <div>
            <MoviePoster poster={poster}></MoviePoster>
            <h1>{title}</h1> 
        </div> 
    );
}

//Dumb Component의 proptype 검사
Movie.propTypes = {
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}
*/

//Smart Component : state,props 둘다 있음 
class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt : PropTypes.string.isRequired,
    }
    render(){
        return(
            <img src={this.props.poster} className="Movie__Poster" alt={this.props.alt} title={this.props.alt}></img>
        );
    }
}
/* stateless functional 컴포넌트로 바꾸는 법 / Dumb Component: stateless, props만 갖음
function MoviePoster({poster}){
    return(
        <img src={poster}></img>
    );
}

//Dumb Component 에서 proptype 검사하는 법
MoiviePoster.propTypes ={
    poster : PropTypes.string.isRequired,
}
*/
export default Movie;