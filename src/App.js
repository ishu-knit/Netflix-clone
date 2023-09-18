import Rows from  "./Rows"
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="app">

     {/* nav */}
     <Nav/>
     {/* banner */}
      <Banner/>
     <Rows title="Trending Now"     fetchurl= {requests.fetchtrending}  islarge />
     <Rows title="Top Rated"        fetchurl= {requests.fetchToprated}/>
     <Rows title="Horror Movies"    fetchurl= {requests.fetchHorrormovie}/>
     <Rows title="Action Movies"    fetchurl= {requests.fetchActionmovie}/>
     <Rows title="Commedy Movies"   fetchurl= {requests.fetchCommedymovie}/>
     <Rows title="Romance Movies"   fetchurl= {requests.fetchRomancemovie}/>
     <Rows title="Documentry"       fetchurl= {requests.fetchDocumentry}/>


    </div>
  );
}
export default App;