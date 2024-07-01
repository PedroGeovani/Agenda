import api from "./api"

export class DataBaseUsers{
    listUser(){
        api
        .get('/users')
        .then(response => (this.listUser = response.data))
        .catch(err => console.log(err))
        } 
    }

    user(id : String){
        api
        .delete('/users/'+id)
        .then(response => (this.listUser = response.data))
        .catch(err => console.log(err))
        } 
    }

}