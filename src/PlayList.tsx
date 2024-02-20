import PlayListEntry from "./PlayListEntry";

export class Song {
    title: string;
    artist: string;
    img: string;
    constructor(title: string, artist: string, img: string) {
        this.title = title;
        this.artist = artist;
        this.img = img;
    }
}

//export default function PlayList({ setSong }: { setSong: (song: Song) => void }): JSX.Element {
export default function PlayList({ setSong }: { setSong: any }): JSX.Element {
    const playList: Song[] = [
        new Song("Trout Mask Replica", "Captain Beefheart", "./src/img/cb-1.jpg"),
        new Song("Mirror Man", "Captain Beefheart", "./src/img/cb-2.jpg"),
        new Song("Mothership Connection", "Parliament Funkadelic", "./src/img/gc-1.jpg"),
        new Song("Nocturne op.9", "Chopin", "./src/img/ch-1.jpg"),
        new Song("Don't Eat the Yellow Snow", "Frank Zappa", "./src/img/fz-1.jpg"),
        new Song("Hot Rats", "Frank Zappa", "./src/img/fz-2.jpg"),
        new Song("Moonlight Sonata", "Ludwig van Beethoven", "./src/img/lvb-1.jpg"),
        new Song("Apostrophe (')", "Frank Zappa", "./src/img/fz-1.jpg"),
    ];
    return (
        <section className="list">
            <ul>
                {playList.map(s => (
                    <PlayListEntry key={s.title} song={s} setSong={setSong} />
                ))}
            </ul>
        </section>
    );
}
