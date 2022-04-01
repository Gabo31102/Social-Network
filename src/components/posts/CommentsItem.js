import React, { useEffect, useState } from 'react'
import { CommentGridItem } from './CommentGridItem'

export const CommentsItem = ( {ItemIdPost}) => {
 

    const [useComments, setUseComments] = useState([])

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
        const  comments = data.map( comment => { 
             return {
            id: comment.id,
            message: comment.message,
            firstname: comment.owner.firstName,
            lastname: comment.owner.lastName,
            picture: comment.owner.picture,
            title: comment.owner.title
       
          }
        })
        setUseComments(comments)
      }

  return (
     <div className="grid-card-container">
         {
            useComments.map( (comment)=> (
                <CommentGridItem 
                    key={comment.id}
                    comment={comment}
                />
            ))
         }
    
    </div>
    
 
  )
}
