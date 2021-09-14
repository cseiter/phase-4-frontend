import React, {useEffect, useState} from 'react';
import './App.css';
import RoomForm from './components/RoomForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://radiant-waters-01618.herokuapp.com/rooms")
    .then((r) => r.json())
    .then(setRooms);
  },[]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddRoom(newRoom) {
    setRooms([...rooms,newRoom]);
  }

  function handleUpdateRoom(updatedRoom) {
    const updatedRooms = rooms.map((room) =>
    room.id === updatedRoom.id ? updatedRoom : room);
    setRooms(updatedRooms);
  }

  function handleDeleteRoom(deleteRoom) {
    const deleteRooms = rooms.filter((room) => room.id !== deleteRoom.id);
    setRooms(deleteRooms);
  }

  return (
    <>
    <div className="App">
      <h1>hello</h1> 
    </div>
      {showForm ? <RoomForm onAddRoom={handleAddRoom} /> : null}
      <div>
        <button onClick={handleClick}>Add a room</button>
      </div>
    </>
  );
}

export default App;
