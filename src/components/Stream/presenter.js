// Note to self: This is a "presentation" type component.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';

class Stream extends Component {

    componentDidUpdate() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);

        if (!audioElement) { return; }

        const { activeTrack } = this.props;

        if (activeTrack) {
            // Temp hax until i get an API CLIENT_ID and can use the real function audio tag below.
            console.log('Stream - audioElement.play() - ' + activeTrack.origin.title);
            // audioElement.play();
        } else {
            // Temp hax until i get an API CLIENT_ID and can use the real function audio tag below.
            console.log('Stream - audioElement.play() - ' + activeTrack.origin.title);
            // audioElement.pause();
        }
    }

    render() {
        const {  user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

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
                {
                    activeTrack
                    ?
                        // Temp hax until i get an API CLIENT_ID and can use the real function audio tag below.
                        <span id="audio" ref="audio">[audio-placholder: {activeTrack.origin.stream_url}]</span>
                        // <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio>
                    :
                        null
                }
            </div>
        );
    }

}

export default Stream;
