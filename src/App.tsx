import { Routes, Route} from "react-router-dom";
import Home from 'pages/Home';
import Notfound from 'pages/Notfound';
import CharacterModal from './components/CharacterModal';
import Layout from './components/Layout';

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<CharacterModal />} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
