import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import './styles/App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return(
    <div className='the-lister-container'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
