
import './App.css'
import NetflixNavbar from './Components/NetflixNavbar';
import Footer from './Components/Footer';
import MovieGallery from './Components/MovieGallery';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
     <NetflixNavbar/>
     <MovieGallery category={"Harry Potter"}/>
     {/*<MovieGallery category={"Lord Of The Rings"}/>
     <MovieGallery category={"Star Wars"}/>*/}
     <Footer/>
    </>
  );
}

export default App;
/* Here is your key: 2beaba4d

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2beaba4d*/