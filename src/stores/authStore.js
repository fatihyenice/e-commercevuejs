import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { logginService, logout, checkedSession } from "@/services/authService"; 
import { useRouter } from "vue-router";

export const auth = defineStore('authstore', () => {
    const alerterror = ref(false);
    const alertsuccess = ref(false);
    const email = ref('');
    const password = ref('');  

    const logged = ref(false);

    const loggin = async() => {
        try {
            const response = await logginService(email.value,password.value);
            alertsuccess.value = response.message
            alerterror.value = false;
            logged.value = response.id; 
            await checkSession(); 
        }catch(e){
            alertsuccess.value = false;
            alerterror.value = "L'utilisateur est introuvable !";
            throw e
        }
    }

    const checkSession = async() => {
        try {
            const response = await checkedSession();
            logged.value = response.connected; 
        }catch(e){
            throw e
        }
    } 

    const logoutAction = async(event) => {
        event.preventDefault();
        try {
            const response = await logout();
            logged.value = response.connected; 
        }catch(e){
            throw e
        }
    }

    watch(() => logged.value, (newValeur, ancienneValeur) => {
        if (newValeur === false || ancienneValeur === true) {
            email.value = "";
            password.value = "";
            alerterror.value = false;
            alertsuccess.value = false;
        }
    });
 
    checkSession();

    return {
        loggin,
        alerterror,
        alertsuccess,
        email,
        password,
        checkSession,
        logoutAction,
        logged, 
    }
})