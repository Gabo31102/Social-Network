import React, { useRef, useState } from 'react'
import ModalComments from '../Modal/ModalComments'
import ModalUserInfo from '../Modal/ModalUserInfo';
import { CommentsItem } from './CommentsItem';
import { InfoUserItem } from './InfoUserItem';

export const PostGridItem = ({post}) => {

    const { 
        text, 
        image,
        tags, 
        picture,
        displayName,
        date,
        likes,
        idOwner,
        idPost} = post

      
      const [ItemIdUser, setItemIdUser] = useState('null');
      const [ItemIdPost, setItemIdPost] = useState('null')


      const modal = useRef();
      const modal2 = useRef();
      
      const captureIdUser = ( id ) =>{
        setItemIdUser(id)
        modal.current.open()
      }
      
      const captureIdPost= ( id ) =>{
        setItemIdPost(id)
        modal2.current.open()
      }
      
      
      
      return (
        <div className="grid-container">
    <div className="grid-card">
      <div className="grid-card__header">
        <img src={image} alt="grid-card__image" className="grid-card__image"  height="500"/>
      </div>

      <p>{text}</p>
   
      <div className="grid-card__body">
        {
          tags.map( tag => (
            <span
            key={tag}
            className="tag tag-red"
            >{tag}
                    
                </span>
            ))
        }         
         
      </div>
      <div className="grid-card__footer">
        <div className="grid-user">
          <img src={picture} 
              alt="grid-user__image" 
              className="grid-user__image"
              onClick={()=> captureIdUser(idOwner)} 
          />
          <div className="grid-user__info">
            
             <h5>{displayName}</h5>
             <small>{date.substring(0,10)}</small>
          </div>
        </div>
        <div className='grid-post-likes'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/220px-Facebook_Thumb_icon.svg.png" 
                    alt="grid-user__image"  width="50"/> 
        <div>
            <span >{likes} </span>
        </div>      
        </div>
        
        <button 
          className='button__coments'
          onClick={()=> captureIdPost(idPost)} 
        >
          coments
        </button>
      </div>
    </div>

          <ModalUserInfo ref={modal}>
              <InfoUserItem ItemIdUser={ItemIdUser} />
          </ModalUserInfo>
    
          <ModalComments referencia={modal}>
              <CommentsItem ItemIdPost={ItemIdPost} />
          </ModalComments>
             
          
  </div>
  )
}


