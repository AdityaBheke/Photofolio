import { useEffect, useState } from 'react';
import './App.css';
import AlbumContainer from './components/AlbumContainer';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer/>
      <Navbar/>
      {type==="albumsList"?<AlbumContainer handleSelect={handleSelect}/>:<></>}
      {type==="imagesList"?<ImageContainer album={album} handleBack={handleBack}/>:<></>}

    </div>
  );
}

export default App;
