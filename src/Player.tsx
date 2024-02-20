import PlayedSongInfo from "./PlayedSongInfo";
import PlayerControls from "./PlayerControls";

export default function Player(props: any) {
    return (
        <section className="player">
            <PlayedSongInfo song={props.song} />
            <PlayerControls />
        </section>
    );
}
