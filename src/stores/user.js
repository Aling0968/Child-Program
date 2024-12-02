import {defineStore} from "pinia";
import {ref} from "vue";

export const useAccount=defineStore('account',()=>{
    const info=ref({
        avatar:'',
        userName:'',
        nickName:'',
        email:'',

        })
     return{
        info
     }

})