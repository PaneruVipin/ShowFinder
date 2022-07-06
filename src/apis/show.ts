import axios from "axios"
import { show, showCast } from "../../modeles/show"
type getShows={
    show: show
}

export const getShows= async(query:string) =>{
const response=await axios.get<getShows[]>('https://api.tvmaze.com/search/shows?q='+query);
return response.data.map((d)=>d.show)
}

export const getShow= async(showId:number) =>{
    const response=await axios.get('https://api.tvmaze.com/shows/'+showId);
    return response.data
    }


    export const getShowCast= async(showId:number) =>{
        const response=await axios.get<showCast[]>(` https://api.tvmaze.com/shows/${showId}/cast`);
        return response.data.map(d=>({
            person:d.person,
            character:d.character
        }))
        }