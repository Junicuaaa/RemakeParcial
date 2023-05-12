import get from "./getCampers.js"
import {editCampers} from "../../api/apiCampers.js"
export default{
    editCampers(id){
        let ws = new Worker("js/services/wsEdit.js", {type: "module"})
        ws.postMessage({module: "putCamper", data: id})
        ws.addEventListener("message", (e)=>{
            const modal = document.querySelector("#my-dialog")
            modal.innerHTML = e.data
            let form = document.querySelector("#finish")
            form.addEventListener("submit", (e)=>{
                let data2 = Object.fromEntries(new FormData(e.target))
                e.preventDefault();
                form.reset();
                editCampers(id, data2)
                get.getCampers();
            })
        })
    }
}