export default function PlayerControls() {
    return (
        <>
            <article className="meter">
                <span>0:40</span>
                <div className="bar">
                    <div className="bar-played"></div>
                </div>
                <span>3:42</span>
            </article>
            <article className="controls">
                <div>
                    <button className="material-icons">repeat</button>
                </div>
                <div>
                    <button className="material-icons">fast_rewind</button>
                </div>
                <div>
                    <button className="play material-icons">play_circle</button>
                </div>
                <div>
                    <button className="material-icons">fast_forward</button>
                </div>
                <div>
                    <button className="material-icons">shuffle</button>
                </div>
            </article>
        </>
    );
}
