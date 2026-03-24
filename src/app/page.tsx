
import prisma from "@/lib/db";

const page = async () =>{
    const users = await prisma.user.findMany() ; 
    return ( 
        <div className=" min-h-screen min-w-screen items-center flex justify-center">
            {JSON.stringify(users)}
        </div>
    ) ; 

} ; 

export default page; 

