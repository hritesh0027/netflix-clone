import './HomeScreen.css';
import Nav from '../Nav.js';
import Banner from '../Banner.js';
import Row from '../Row';
import Requests from '../Requests.js';

function HomeScreen(){
    return(
        <div>
            <Nav />
            
            <Banner />
            
            <Row title="NETFLIX ORIGINALS" type = "tv" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchNetflixOriginals} isLargeRow={true} /> 
            <Row title="Trending Now"      type = "any" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchTrending} />
            <Row title="Comedy Movies"     type = "movie" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchComedyMovies} /> 
            <Row title="Horror Movies"     type = "movie" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchHorrorMovies} />
            <Row title="Romance Movies"    type = "movie" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchRomanceMovies} /> 
            <Row title="Documentaries"     type = "movie" fetchit = {Requests.fetchMovie} fetchURL={Requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen