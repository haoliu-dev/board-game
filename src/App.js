import './App.css';
import GameUI from './ui/GameUI.js'

import GameEditorUI from './ui/GameEditorUI';
function App() {
  return (
    <div className="App">
      <GameUI></GameUI>
      <GameEditorUI></GameEditorUI>
    </div>
  );
}

export default App;
