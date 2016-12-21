import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CLIENT_ID } from '../../constants/authConstants';
import * as actions from '../../actions';

export class Stream extends Component {

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
                            if (activeTrack !== track) {
                                return(
                                    <div className="track" key={key}>
                                        {track.origin.title}
                                        &nbsp;
                                        <button type="button" onClick={() => onPlay(track)}>Play</button>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className="track" key={key}>
                                        {track.origin.title}
                                        &nbsp;
                                        <button type="button" onClick={() => onPlay(null)}>Stop</button>
                                    </div>
                                );
                            }
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

function mapStateToProps(state) {
    // const { user } = state.auth;
    // const { user } = state.authReducers;
    // const { user } = state.user;
    const { user } = state.auth.user;

    const { tracks, activeTrack } = state.track;
    return {
        user,
        tracks,
        activeTrack
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.authAction, dispatch),
        onPlay: bindActionCreators(actions.playTrackAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
