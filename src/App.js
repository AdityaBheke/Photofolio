import { useEffect, useState } from 'react';
import './App.css';
import AlbumContainer from './components/AlbumContainer';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';

function App() {
  const [type, setType] = useState('');
  const [album, setAlbum] = useState(null);

  useEffect(()=>{
    setType('albumsList')
  }, [])
  function handleBack() {
    setType('albumsList')
  }
  function handleSelect(contentType, album){
    setType(contentType);
    setAlbum(album);
  }
  return (
    <div className="App">
      <Navbar/>
      {type==="albumsList"?<AlbumContainer handleSelect={handleSelect}/>:<></>}
      {type==="imagesList"?<ImageContainer album={album} handleBack={handleBack}/>:<></>}

    </div>
  );
}

export default App;
