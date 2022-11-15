import React from 'react';
import './App.css';


const App: React.FC = () => { //React.FC = react functional component
  return (
    <div className="App">
        <span className="heading">RateMy</span>
        <div className='playerCard'> <iframe className='player' src="https://open.spotify.com/embed/playlist/0w6uY7dxfzin6v33vnygEf?utm_source=generator&theme=0" width="20%" height="400" title='spotify'></iframe></div>
    </div>
  );
}

export default App;
