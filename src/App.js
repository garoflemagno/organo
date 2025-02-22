import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {

const times = [
  {
    nome: 'Final Fantasy XIV',
    corPrimaria: '#57c278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'League of Legends',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Valorant',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Fortnite',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Deadlock',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Phasmophobia',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario  times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} jogadores={jogadores.filter(jogador => jogador.time === time.nome)} />)}
      <Footer />
    </div>
  );
}

export default App;
