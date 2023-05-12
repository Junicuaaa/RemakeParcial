import {deleteCampers} from "../../api/apiCampers.js"
import edit from "./editCampers.js"
export default{
    ws:new Worker("js/services/wsGet.js", {type: "module"}),
    getCampers(){
        this.ws.postMessage({module: "showCampers", data: ""})
        this.ws.addEventListener("message", (e)=>{
            document.querySelector(".accordion").innerHTML = e.data
            let delete_btn = document.querySelectorAll(".delete")
            let edit_btn = document.querySelectorAll(".edit")
            let modal = document.querySelector("#my-dialog")
            edit_btn.forEach(element => {
                element.addEventListener("click", (e)=>{
                    edit.editCampers(element.classList[0])
                    modal.showModal();
                })
            });
            delete_btn.forEach(element => {
                element.addEventListener("click", (e)=>{
                    this.deleteCampers(element.classList[0])
                })
            });
        })
    },
    deleteCampers(p1){
        deleteCampers(p1)
        this.getCampers()
    },
    filterCampers(){
        let button_2 = document.querySelector(".allfilter")
        let button = document.querySelector(".agefilter")
        button.addEventListener("click", (e)=>{
            this.ws.postMessage({module: "agefilter", data: ""})
            document.querySelector(".accordion").innerHTML = e.data
        })
        button_2.addEventListener("click", (e)=>{
            this.getCampers()
        })
    }
}