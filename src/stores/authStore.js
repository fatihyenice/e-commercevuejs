import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { logginService, logout, checkedSession, registerService } from "@/services/authService";  

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

    // Inscription
    const nomregister = ref('');
    const prenomregister = ref('');
    const mailregister = ref('');
    const mdpregister = ref('');
    const mdpdeuxregister = ref('');
    const errorregister = ref('');
    const successegister = ref('');

    const register = async() => {
        try {
            const response = await registerService(nomregister.value, prenomregister.value, mailregister.value, mdpregister.value, mdpdeuxregister.value);

            successegister.value = response.message;
            errorregister.value = false;

            nomregister.value = "";
            prenomregister.value = "";
            mailregister.value = "";
            mdpregister.value = "";
            mdpdeuxregister.value = "";
        }catch(e) {
            errorregister.value = e.response.data.message;
            successegister.value = false;
        }
    }

    return {
        loggin,
        alerterror,
        alertsuccess,
        email,
        password,
        checkSession,
        logoutAction,
        logged, 
        nomregister,
        prenomregister,
        mailregister,
        mdpregister,
        mdpdeuxregister,
        register,
        errorregister,
        successegister, 
    }
})