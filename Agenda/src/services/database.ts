import api from "./api.ts"
import { type UserTypes  } from "./type.ts"

export class DataBaseUsers{    

    ListUser(database:string) : UserTypes[] {
        let list_data : UserTypes[] = []
        api
        .get(database)
        .then(response => (list_data = response.data))
        .catch(err => console.log("Erro" + list_data));
        return list_data    
    }

    getUser(databaseId:string): UserTypes{
        let item : UserTypes = {} as UserTypes
         api
        .get(databaseId)
        .then(response => (item = response.data))
        .catch(err => console.log(err))
        return item
    }

    deleteUser(databaseId:string){
        api
        .delete(databaseId)
        .then(response => console.log("successfully deleted"))
        .catch(err => console.log(err))        
    }
    
}