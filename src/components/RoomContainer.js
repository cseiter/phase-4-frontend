import React from 'react';
import RoomCard from './RoomCard';

function RoomContainer( {rooms, onDeleteRoom, onUpdateRoom}) {
    const roomCards = rooms.map((room) => (
        <RoomCard
            key={room.id}
            room={room}
            onDeleteRoom={onDeleteRoom}
            onUpdateRoom={onUpdateRoom}
        />
    ));
    return <div>{roomCards}</div>;
}
export default RoomContainer;