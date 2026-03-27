import { SignupForm } from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

const page = async ()=>{
    await requireUnAuth() ; 
    return (
        <div>
            <SignupForm/>
        </div>
    ); 
}; 

export default page ;