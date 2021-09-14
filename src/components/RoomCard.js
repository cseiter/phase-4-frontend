import React from 'react';

function RoomCard({room, onDeleteRoom, onUpdateRoom}) {
    const {id, rooms_name} = room;

    function handleDeleteClick() {
        fetch(`https://radiant-waters-01618.herokuapp.com/rooms/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(console.log({id}))
        .then(() => {onDeleteRoom(room);
        });
    }

    return (
        <div>
            <h2>{rooms_name}</h2>
            <button onClick={handleDeleteClick}>Delete room</button>
        </div>
        );
    };

export default RoomCard;