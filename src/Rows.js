import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Rows(props) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, settrailerurl] = useState("")

  useEffect(() => {
    function fd() {

      // fetch

      //  fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9196db42dfa06b95ebd4cd1680a3d19')
      //   .then( (x) =>x.json())
      //   .then((y) =>(setMovies (y.results)))


      // axios

      // axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9196db42dfa06b95ebd4cd1680a3d19")
      axios.get(props.fetchurl)
        .then(x => setMovies(x.data.results))
    }

    fd()

  }, [props.fetchurl]);


  const handleclick = (mov) => {


    if (trailerurl) { settrailerurl(""); }
    else {
      movieTrailer(mov?.title || "")
        .then((url) => {
          const urlparam = new URLSearchParams(new URL(url).search);
          settrailerurl(urlparam.get("v"));
        })
        .catch((err) => { console.log(err) });
    }




  }



  const opts = {
    height: "300",
    weight: "100%",
    playervars: {
      autoplay: 1
    }
  }



  return (
    <>

      <div className='row'>

        <h3>{props.title}</h3>


        <div className="row_posters">

          {movies.map(e => (

            <img
              key={e.id}
              onClick={() => handleclick(e)}

              className='row_poster'
              //previous 



              src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + e.poster_path}
              // latest
              // src=  {`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.islarge?e.poster_path:e.backdrop_path}`  }

              alt={e.title}
            />
          )
          )}



        </div>
          {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}

      </div>
    </>
  );
}

export default Rows
