import {getCampers} from "../../api/apiCampers.js"
let ws = {
    async teamCamper(){
        let data = await getCampers();
        data.forEach(element =>{
          postMessage({trainer: `${element.team.trainer}`, data: `<i>${element.name}</i>`})
          console.log(element);
        })
      }
}
self.addEventListener("message", async(e)=>{
    await ws.teamCamper();
})
