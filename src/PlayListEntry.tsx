import { Song } from "./PlayList";
export default function PlayListEntry({ song, setSong }: { song: Song; setSong: any }) {
    return (
        <li onClick={() => setSong(song)}>
            <article>
                <img src={song.img} alt={song.title} />
                <div className="list-text">
                    <p>{song.artist}</p>
                    <p>{song.title}</p>
                </div>
                <div>
                    <button className="play playing material-icons">play_arrow</button>
                </div>
            </article>
        </li>
    );
}
