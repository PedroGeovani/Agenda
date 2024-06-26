import http from "../api";
import { APIResponse } from "../types";
import { Users } from "./types";

async function getUsers() {
    return await http.get<APIResponse<Users[]>>("school");
  }
  
  export default {
    getUsers
  };