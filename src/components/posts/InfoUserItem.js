import React, { useEffect, useState } from 'react'

export const InfoUserItem = ( {ItemIdUser} ) => {

  console.log(ItemIdUser)

  const [userProfile, setUserProfile] = useState('60d0fe4f5311236168a109e7')
  const [userAdress, setuserAdress] = useState('')
  
  const { dateOfBirth,email,firstName,gender,lastName,phone,picture,title } = userProfile
  const { country, state, city,  street } = userAdress
  

    useEffect(() =>{
      getUser();
    },[])

   
    const getUser = async () =>{
   
          const url = `https://dummyapi.io/data/v1/user/${ItemIdUser}`
          const resp = await fetch( url, {
            headers:{
              'Content-Type': 'aplication/json',
              'app-id': '624365473627c20b9b3ea39e'
            }
          });
          const  data = await resp.json();
          
          const profile = data
          const adress = data.location

          setUserProfile(profile)
          setuserAdress(adress)

          return {
            adress,
            profile      
          }
        }
       

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
                    <b> Phone  :</b> {phone}
                    <br/> 
                    <b> Gender :</b> {gender}
                    <br/> 
                    <br/>
                    <b> Date Of Birh :</b> { dateOfBirth}
                    <br/> 
                    <br/> 
                    <b> Email :</b> {email}
                    <br/>
                    <br/> 
                    <hr/>
                    <h3>Adress </h3>
                    <hr/>
                    <br/> 
                    <b> Country :</b> {country}
                    <br/>
                    <b> State :</b> {state} 
                    <br/>
                    <b> City :</b> {city} 
                     <br/>
                    <b> Stret :</b> {street} 
                  </div>

              </div>
            </div>
          </div>
  )
}
