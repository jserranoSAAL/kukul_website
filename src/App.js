import Background from "./components/Background";
import "./App.css";
import Image from "./assets/image.jpeg"; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <div className="overlay-content">
          <img src={Image} alt="Imagen principal" className="main-image" />
          <h1>Le rêve de voyager</h1>
          <p>
            Si vous avez toujours rêvé de connaître le Mexique, nous vous proposons de le réaliser en organisant un voyager personnalisé pour découvrir la nature, la culture, la gastronomie et de la gentillesse de ses habitants. Nous vous proposons une expérience authentique.
          </p>
          <p>
            La touche humaine de l'expérience que nous proposons est le secret de la réussite de votre voyage!
          </p>
          <p className="highlight">
            Nous travaillons à la conception de notre image. Bientôt, vous en découvrirez plus sur nous.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
