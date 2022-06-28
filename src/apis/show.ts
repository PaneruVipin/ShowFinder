import axios from "axios"
import { show } from "../modeles/show"
type getShows={
    show: show
}

export const getShows= async(query:string) =>{
const response=await axios.get<getShows[]>('https://api.tvmaze.com/search/shows?q='+query);
return response.data.map((d)=>d.show)
}

