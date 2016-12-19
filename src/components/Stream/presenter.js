// Note to self: This is a "presentation" type component.
import React from 'react';

function Stream({ user, tracks = [], onAuth, onPlay }) {
    return (
        <div>
            <div>
                {
                    user
                    ?
                        <div>{user.username}</div>
                    :
                        <button onClick={onAuth} type="button">Login</button>
                }
            </div>
            <br />
            <div>
                {
                    tracks.map((track, key) => {
                        return (
                            <div className="track" key={key}>
                                {track.origin.title}
                                &nbsp;
                                <button type="button" onClick={() => onPlay(track)}>Play</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Stream;
