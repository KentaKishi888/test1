import { ChatBubbleOutline, FavoriteBorder, PublicOffOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css";

const Post = () => {
  return (
    <div className='post'>
        <div className='post_avatar'> 
            <Avatar src=""/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headertext'>
                    <h3>岸健太</h3>
                    <span className='post_headerSpecial'>
                        <VerifiedUser className='post_badge'/>
                        @Shin_engineer
                    </span>
                </div>
                <div className='post_headerDescription'>
                    <p>リアリティないう</p>

                </div>
            </div>
            {/* UPSPLASHから無料画像ランダムで。。 */}
            <img src="https://source.unsplash.com/random"/>
            <div className='post_footer'>
                <ChatBubbleOutline fontSize="small"/>
                <Repeat fontSize="small"/>
                <FavoriteBorder fontSize="small"/>
                <PublicOffOutlined fontSize="small"/>
            </div>
        </div>
    </div>
  )
}

export default Post
