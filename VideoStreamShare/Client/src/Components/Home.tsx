import {useState} from "react";

export default function Home() {
    const [roomName, setRoomName] = useState('');
    
    function handleSubmit() : void {
        fetch("http://localhost:5094/Room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: roomName
        }).then(
            (response) => {console.log(response)}
        )
    }
    
    return (
        <>
            <h1>Home</h1>
            <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}