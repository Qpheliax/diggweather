import "./App.scss";
import Header from "./js/baseComponents/header";
import Weather from "./js/baseComponents/weather";
import Footer from "./js/baseComponents/footer";
import Background from "./js/svg/background";

function App() {
  return (
    <>
      <div className="App">
        <Background />
        <Header />
        <Weather />
        <Footer />
      </div>
    </>
  );
}

export default App;
