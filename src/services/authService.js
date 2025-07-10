import { app } from "@/axios-config/config"

export async function logginService(email, password) {
    try {
        const response = await app.post("/api/auth/loggin", {
            mail: email,
            passwordv: password
        })
        return response.data;
    }catch(e){
        throw e
    }
}

export async function checkedSession(){
    try {
        const response = await app.post("/api/auth/checksession")
        return response.data;
    }catch(e){
        throw e
    }
}

export async function logout(){
    try{
        const response = await app.post("/api/auth/logout");
        return response.data;
    }catch(e){
        throw e
    }
}