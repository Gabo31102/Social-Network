import React, { useState } from 'react'

export const CommentGridItem = ({comment}) => {
   
    const {firstname, lastname, message, picture, title} = comment
  
  return (
    <div>
     <div className="grid-card"> 
        <div className="grid-card__body">
           <div className="grid-card__header">
              <img src={picture} 
                        alt="grid-user__image" 
                        className="grid-user_image"
              />
                 <h2>{title + ' ' + firstname + ' ' + lastname }</h2>
                 <br/>
                 <hr/>
                 <div className="grid-card__body">
                    <b> Comment  :</b> {message}
                    <br/> 
                    <br/> 
                    <hr/>
                  </div>

              </div>
            </div>
          </div> 
    </div>
  )
}
