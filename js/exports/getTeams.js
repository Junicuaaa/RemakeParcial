export default{
    async showTeams(){
        let ws = new Worker("js/services/wsGeteams.js", {type:"module"})
        ws.postMessage({module: "teams", data: ""})
        ws.addEventListener("message", (e)=>{
            document.querySelector(".accordion").innerHTML = e.data
        })
    }
}