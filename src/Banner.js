import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./banner.css"

export default function Banner() {

    // const [bgimg, setBgimg] = useState([]);
    const [movie, setmovie] = useState([]);
    useEffect(() => {



        async function fetchimgdata() {
            const fetchimg = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=c9196db42dfa06b95ebd4cd1680a3d19')
            // const fetchimg = await axios.get('https://api.themoviedb.org/3/discover/tv?sort_by=release_date.asc&with_networks=network_string&first_air_date.gte=2017-05-01&include_null_first_air_dates=true&api_key=c9196db42dfa06b95ebd4cd1680a3d19')
            setmovie(fetchimg.data.results[Math.floor(Math.random() * fetchimg.data.results.length)])

        }

        fetchimgdata()

    }, []);



    // this fucntion is to limit the no. of words that written in banner's description  if execeeded then put ...
function truncate(str,n) {
    return str?.length>n?str.substr(0,n-1)+"...":str;
}

    
    return (
        <>
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `Url(
                    https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}
                )`,
                backgroundPosition:"center center",
              
                }} >
    
                <div className="banner_content">
                    {/* title */}

                    {/* it is if - not  */}
                    <h1>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    {/* button  */}
                    <div className="banner_buttons">

                    <button className="banner_button" >Play</button>
                    <button className="banner_button" >Mylist</button>
                    </div>


                    {/* info about that movie  */}
                    <h1 className="banner_description">
                        {truncate(movie?.overview,150)}
                    </h1>
        
                </div>
                    <div className="banner_footer"/>
            </header>
        </>
    )
}

