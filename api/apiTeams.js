const url = "http://localhost:4100/teams"
const url2 = "http://localhost:4100/teams?_embed=campers"

export const getTeams = async()=>{
    try {
        const data = await (await fetch(url)).json()
        return data
    } catch (error) {
        console.log(error);
    }
}