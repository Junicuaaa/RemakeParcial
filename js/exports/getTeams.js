export default{
    async showTeams(){
        let ws = new Worker("js/services/wsGeteams.js", {type:"module"})
        let ws2 = new Worker("js/services/wsTeamCampers.js", {type: "module"})
        ws.postMessage({module: "teams", data: ""})
        ws.addEventListener("message", (e)=>{
            document.querySelector(".accordion").innerHTML = e.data
            ws2.postMessage({module: "teamCamper", data: ""})
            ws2.addEventListener("message", (e)=>{
                console.log(e.data);
                document.querySelector(`#${e.data.trainer}`).insertAdjacentHTML("afterbegin", e.data.data)
            })
        })
    },
}