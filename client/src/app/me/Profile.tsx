'use client'
import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import { cookies } from 'next/headers'
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const {sessionToken} = useAppContext()
    type Result = {status? : number,payload?: any}
        
    const [result, setResult] = useState<Result>({});
    useEffect(() => {
        const fetchRequest = async () => {
           
            const result = await fetch(
              `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
              {
                headers: {
                  "Content-type": "application/json",
                  Authorization: `Bearer ${sessionToken}`,
                },
              }
            ).then(async (res) => {
              const payload = await res.json();
              const data = {
                status: res.status,
                payload,
              };
              if (!res.ok) {
                throw data;
              }
              setResult(data)
            });
              
        } 
        fetchRequest()

    }, [sessionToken])
  return (
    <div>
      Hello bruh <b> {result.payload?.data?.name} !!! </b> 
    </div>
  )
}
