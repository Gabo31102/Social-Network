import React from 'react'

export const CommentsItem = ( {ItemIdPost}) => {

    console.log(ItemIdPost)
   
    const getComments = async  () => {

        const url = `https://dummyapi.io/data/v1/post/${ItemIdPost}/comment?limit=10`
        const resp = await fetch( url, {
          headers:{
            'Content-Type': 'aplication/json',
            'app-id': '624365473627c20b9b3ea39e'
          }
        });
        const {data} = await resp.json();
        const comments = data.map( coment => {
            console.log(data)
          return {
       
          }
       
        })
        
      }

    getComments();

  return (
    <>
       
    
    </>
  )
}
