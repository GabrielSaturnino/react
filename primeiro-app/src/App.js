import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

const data = [
  {
    title: "HTML",
    content: "Aprender a estruturar os elementos da página com HTML"
  },
  {
    title: "CSS",
    content: "Aprender a estilizar elementos da página com CSS"
  },
  {
    title: "JavaScript",
    content: "Aprender a linguagem utilizada pelo React JS, o JavaScript"
  }
];

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Main />

      <div style={{ display: "flex", gap: "1rem" }}>
        {data.map(item => (
          <Card
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
