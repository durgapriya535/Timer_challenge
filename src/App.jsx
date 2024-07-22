import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <TimeChallenge Title="easy" targetTime="1"/>
      <TimeChallenge Title="not easy" targetTime="5"/>
      <TimeChallenge Title="hard" targetTime="10"/>
      <TimeChallenge Title="pros only" targetTime="15"/>
    </>
  );
}

export default App;
