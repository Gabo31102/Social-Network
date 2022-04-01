import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostGridItem } from './PostGridItem';

export const PostsScreen = () => {

  const [posts, setposts] = useState([]);



  useEffect(() =>{
    getPosts();

  }, [])

  const getPosts = async  () => {

    const url = 'https://dummyapi.io/data/v1/tag/ocean/post?limit=12'
    const resp = await fetch( url, {
      headers:{
        'Content-Type': 'aplication/json',
        'app-id': '624365473627c20b9b3ea39e'
      }
    });
    const {data} = await resp.json();
    const posts = data.map( post => {
      return {
        idPost: post.id,
        image: post.image,
        likes: post.likes,
        displayName: post.owner.firstName +' '+ post.owner.lastName,
        idOwner: post.owner.id,
        picture: post.owner.picture,
        tile: post.owner.title,
        tags: post.tags,
        text: post.text,
        date: post.publishDate

      }
   
    })
    
    setposts(posts);
  }

  

  return (
    <>

     <Navbar/>
     <div className="grid-container">
       
        {
          posts.map( (post) => (
            
            <PostGridItem
            key={post.id}
            post={post} 
            />

           ))

        }
      </div>

    </>
  )
}
