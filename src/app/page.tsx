"use client"

import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const page =  () => {
    // await requireAuth() ; 
    const queryClient = useQueryClient(); 
    const trpc = useTRPC(); 
    const { data } = useQuery(trpc.getWorkflows.queryOptions()) ; 
    const create = useMutation(trpc.createWorkflow.mutationOptions(
        {
            onSuccess : ()=>{
                // queryClient.invalidateQueries(trpc.getWorkflows.queryOptions()); 
                toast.success("Job Queued"); 
            }
        }
    )); 

    return (
        <div className=" min-h-screen min-w-screen items-center flex justify-center flex-col gap-y-6">
            protected page component 
            <div>
                {JSON.stringify(data,null,2)}
            </div>
            <Button disabled={create.isPending} onClick={()=>create.mutate()}>
                Create Workflow
            </Button>
            <LogoutButton/>
        </div>
    );

};

export default page;

