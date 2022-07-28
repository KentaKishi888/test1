import React from 'react'
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';

const Timeline = () => {
  return (
    <div className='timeline'>
      {/* ヘッダー */}
        <div className='timeline_header'></div>
        <h2>ホーム</h2>
      {/* ツイートボックス */}
        <TweetBox/>
      {/* 投稿一覧*/}
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Timeline
