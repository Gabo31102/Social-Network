import React, { useEffect, useState } from 'react'

export const CommentsItem = ( {ItemIdPost}) => {

    const [useComments, setUseComments] = useState('null')

    useEffect( ()=>{
        getComments();
    },[])
   
    const getComments = async  () => {

        const url = `https://dummyapi.io/data/v1/post/${ItemIdPost}/comment?limit=10`
        const resp = await fetch( url, {
          headers:{
            'Content-Type': 'aplication/json',
            'app-id': '624365473627c20b9b3ea39e'
          }
        });
        const {data} = await resp.json();
        const [comments] = data.map( comment => {
           
   
             return {
            message: comment.message,
            firstname: comment.owner.firstName,
            picture: comment.owner.picture,
            tile: comment.owner.title
       
          }
        })
        setUseComments(comments)
      }


    const { firstName, lastName, title,  message, picture} = useComments


  return (
     <div className="grid-card">
        <div className="grid-card__body">
           <div className="grid-card__header">
              <img src={picture} 
                        alt="grid-user__image" 
                        className="grid-user_image"
              />
                 <h2>{title + ' ' + firstName + ' ' + lastName }</h2>
                 <br/>
                 <hr/>
                 <div className="grid-card__body">
                    <b> Comment  :</b> {message}
                    <br/> 
                  </div>

              </div>
            </div>
          </div>
    
 
  )
}
