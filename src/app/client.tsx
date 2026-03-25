"use client"

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export const Client = ()=>{
    const trpc = useTRPC() ; 
    const {data : users } = useSuspenseQuery(trpc.getUsers.queryOptions()) ; 
    return (
        <div>
            <Suspense fallback ={<p>Loading...</p>}>
            Client Component
            </Suspense>
        </div>
    ) ; 
} ; 