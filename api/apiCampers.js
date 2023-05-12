const url = "http://localhost:4100/campers"
const url2 = "http://localhost:4100/campers?_expand=team"
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
        const data = await (await fetch(url2)).json()
        return data
    } catch (error) {
        console.log(error);
    }
}
export const deleteCampers = async(id)=>{
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
        })
    } catch (error) {
        console.log(error);
    }
}

export const editCampers = async(id,data)=>{
    try {
        data.teamId = parseInt(data.teamId);
        await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCamperId = async(id)=>{
    try {
        let data = await (await fetch(`${url}/${id}`)).json()
        return data
    } catch (error) {
        console.log(error);
    }
}
