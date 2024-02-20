import { Song } from "./PlayList";

export default function PlayedSongInfo({ song }: { song: Song }) {
    return (
        <>
            <img className="playing-song-img" src={song?.img} alt={song?.title} />
            <article className="title">
                <button className="material-icons">add_circle_outline</button>
                <div>
                    <p>{song?.artist}</p>
                    <p>{song?.title}</p>
                </div>
                <button className="material-icons">favorite</button>
            </article>
        </>
    );
}
