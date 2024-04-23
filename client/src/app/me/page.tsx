import envConfig from '@/config'
import React from 'react'
import { cookies } from 'next/headers'
import Profile from '@/app/me/Profile'
export default async function MeProfile() {
    const cookieStore = cookies()
    const seesionToken = cookieStore.get('sessionToken')   
    const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization" : `Bearer ${seesionToken?.value}`
          },
        }
      ).then(async (res) => {
        const payload = await res.json()
        const data = {
          status : res.status,
          payload
        }
        if (!res.ok) {
          throw data
        } 
        return data;
        
      })
      console.log(result);
      
  return (
    <div>
      Hello bruh <b>{result.payload.data?.name}  !! </b> 
      <Profile />
    </div>
  )
}
