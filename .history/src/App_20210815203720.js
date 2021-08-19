import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
      </div>
    </div>
  );
}

export default App;
