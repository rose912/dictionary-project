import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://se-images.campuslabs.com/clink/images/5c50b133-7967-41d6-8a32-dae1f89e524d0bf6de7a-3496-432d-a865-d0c7d6d1a928.png?preset=med-sq"
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>coded by Rosemary Obioma</small>
        </footer>
      </div>
    </div>
  );
}
