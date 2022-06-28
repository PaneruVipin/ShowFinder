export type show={
    id:number,
genres:string[],
language:string,
name:string,
image:{
    medium:string,
    original:string,
},
network:{
    country: {name: string, code: string, timezone: string}
id: number
officialSite: string
},
summary:string,
url:string,
_links:{
    previousepisode:{
    href:string
},
self:{
    href:string
},
},
premiered: Date,
rating: {average:number},
officialSite:string
}

