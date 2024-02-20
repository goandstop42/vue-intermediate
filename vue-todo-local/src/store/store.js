import { createStore } from 'vuex';
// 이렇게 import 하면 적용 안 됨
// import todo from './modules/todoApp'
import * as todo from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

// const storage = {
//     fetch(){
//         const arr = [];
//         if(localStorage.length > 0){
//             for(let i = 0; i < localStorage.length ; i++){
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//         }
//         return arr;
//     }
// }

export const store = createStore({
    // state() {
    //     return {
    //         todoItems: storage.fetch()
    //     }
    // },
    // //mutations: mutations,
    // //축약
    // mutations,
    // getters
    modules:{
        todo
    }
})