import { useState } from "react";
import NavHeader from "./NavHeader";
import PlayList, { Song } from "./PlayList";
import Player from "./Player";

export function App() {
    const [currentSong, setCurrentSong] = useState(null);
    return (
        <>
            <NavHeader />
            <main>
                <Player song={currentSong} />
                <PlayList setSong={setCurrentSong} />
            </main>
        </>
    );
}
