"use client"
import React from 'react'
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"




export default function AuthComponent() {
    const supabase = createClientComponentClient()

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                rediretTo: `${location.origin}/auth/callback`,
            },
        })
    }
    return (
        <div className="p-5">
            <Navbar/>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center space-y-5'>
                    <p>
                        시간은 금이다!
                    </p>
                    <Button onClick={handleLogin}>Login with github</Button>
                </div>
            </div>


        </div>
    )
}