import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { formatDate } from '../../../utils/data-format';

import { PlaylistWrapper } from './styled';

const ZXYPlayerList = memo(() => {
  const { 
    currentSong,
    playList
  } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    playList:state.getIn(["player","playList"])
  }),shallowEqual);
  console.log(currentSong);
  console.log(playList);

  return (
    <PlaylistWrapper bgimg={currentSong.al.picUrl}>
      <div className='playlist-header sprite_playlist_bg'>
        <div className='playlist-header-title'>播放列表({playList.length - 1})</div>
      </div>
      <div className='playlist-content'>
        <img src={currentSong.al.picUrl} alt="" />
        <div className='playlist-left'>
          <ul>
            {
              playList.map((item,index) => {
                return (
                  <li className='playlist-list' key={index}>
                    <div className='playlist-item songs-play'>
                      <span className='sprite_playlist'></span>
                    </div>
                    <div className='playlist-item play-name'>
                      <a href="/todo">{item.name}</a>
                    </div>
                    <div className='playlist-item songs-operation'>
                      <div className='songs-operation-wrap'>
                        <span className='sprite_02 favor'></span>
                        <span className='sprite_table share'></span>
                        <span className='sprite_table down'></span>
                        <span className='sprite_playlist del'></span>
                      </div>
                    </div>
                    <div className='playlist-item songs-singer'>
                      <a href="/todo">{item.ar[0].name}</a>
                    </div>      
                    <div className='playlist-item songs-duration'>{formatDate(item.dt,'mm:ss')}</div>
                    <div className='playlist-item song-link'>
                      <span className='sprite_playlist'></span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='playlist-right'>
          123
        </div>
      </div>
    </PlaylistWrapper>
  )
})

export default ZXYPlayerList