"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import envConfig from "@/config"
import { useAppContext } from "@/app/AppProvider"
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
})

export function LoginForm() {
  // 1. Define your form.
  const {setSessionToken} = useAppContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    try{
      // 1
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
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
      // 2
      toast({
        title: result.payload.message,
        description: result.payload.message,
      });
      // 3
      // const resultFromNextServer = await fetch(
      //   "/api/auth", {
      //   method: "POST",
      //   body: JSON.stringify(result),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }).then(async (res) => {
      //   const payload = await res.json();
      //   const data = {
      //     status: res.status,
      //     payload,
      //   };
      //   if (!res.ok) {
      //     throw data;
      //   }
      //   return data;
      // });
      // 4
      console.log('result',result);
      
      setSessionToken(result.payload.data.token)

    }catch(error: any){
      const errors = error.payload.errors as {
          field: string
          message: string

      }[]
      const status = error.status as number
      if(status === 422){
        errors.forEach((error)=>{
          form.setError(error.field as 'email' | 'password', {
            type: 'server',
            message: error.message
          })
        })
      }
    }
    
   }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ex: phuqn10x@gmail.com ...etc" type="email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Your Password" type="password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
            
            
          )}
        />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
  )
}
