import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    
    renderAction() {
        if (this.props.isRemoval){
            return <button onClick={this.removeTrack} className="Track-action">-</button>
        } else {
            return <button onClick={this.addTrack} className="Track-action">+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    };
    
    render() {
        return(
            <div className="Track">
                <img className="Album-image" alt="album cover" height='50px' src={this.props.track.image} />
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album.substring(0, 30)}</p>
                </div>
                <div className="Audio-player">
                    <audio controls volume="0.1" name="media" src={this.props.track.preview}></audio>
                </div>
                {this.renderAction()}
            </div>
        )
    }
};

export default Track;