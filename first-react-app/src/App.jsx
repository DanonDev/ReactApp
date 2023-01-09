import './App.scss';
import Footer from './Components/Partials/Footer/Footer';
import Header from './Components/Partials/Header/Header';
import { MainText } from './Components/Partials/Main/contents';
import Nav from './Components/Partials/Nav/nav';

const App = () => {
  return (
    <div className="App">
      <Header pageTitle="Welcome"/>
      <Nav />
      <MainText />
      <Footer />
    </div>
  );
}

export default App;
