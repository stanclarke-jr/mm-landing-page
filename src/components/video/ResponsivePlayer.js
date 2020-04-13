import React from 'react'
import ReactPlayer from 'react-player'
import '../video/responsive-player.css'

const ResponsivePlayer = ({ url }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls={true}
        playing={true}
        config={{
          youtube: {
            playerVars: {
              iv_load_policy: 0,
              modestbranding: 1,
              origin: "https://muzemasters.com",
              playsinline: 1
            }
          }
        }}
      />
    </div>
  )
}

export default ResponsivePlayer