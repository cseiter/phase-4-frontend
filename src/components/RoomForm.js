import React, {useState} from "react";

function RoomForm({onAddRoom}) {
    const [formData, setFormData] = useState({
        room_name: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newRoom = {...formData};
        fetch("https://radiant-waters-01618.herokuapp.com/rooms", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newRoom),
        })
        .then((r) => r.json())
        .then(onAddRoom);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add Room</h3>
                <input
                type = "text"
                name = "room_name"
                onChange={handleChange}
                value={formData.room_name}
                placeholder="Enter room name"
                />
                <br />
                <input
                type="submit"
                name="submit"
                value="Add New Room"
                />
            </form>
        </div>
    );
};

export default RoomForm;
