import {useState} from "react";
import {Button, Input} from "@headlessui/react";

export default function Home() {
    const [roomName, setRoomName] = useState('');
    
    function handleSubmit() : void {
        fetch("api/Room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: '"' + roomName + '"'
        }).then(
            (response) => {console.log(response)}
        )
    }
    
    return (
        <>
            <h1>Home</h1>
            <Input value={roomName} onChange={(e) => setRoomName(e.target.value)} type="text"/>
            <Button onClick={handleSubmit}>Submit</Button>
        </>
    )
}