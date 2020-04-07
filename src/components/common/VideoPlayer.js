import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/sea/index.css'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856

  // use `ref` to give Video JS a reference to the video DOM element: https://reactjs.org/docs/refs-and-the-dom
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => this.videoNode = node} className="video-js vjs-theme-sea">
            <track kind="captions" {...this.props}></track>
          </video>
        </div>
      </div>
    )
  }
}