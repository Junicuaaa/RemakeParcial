const url = "http://localhost:4000/campers?_expand=team"

export const postCampers = async(data)=>{
    try {
        data.teamId = parseInt(data.teamId);
        await fetch(url, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}
export const getCampers = async() =>{
    try {
        await fetch(url, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
        })
        return
    } catch (error) {
        console.log(error);
    }
}