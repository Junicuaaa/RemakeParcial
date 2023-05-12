import {getTeams} from "../../api/apiTeams.js"
let ws ={
    async teams(){
        let data = await getTeams();
        let html = ``
        data.forEach(element => {
            let name = element.name.replace(/\s+/g, '');    
            html += /*html*/`
            <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${name}" aria-expanded="false" aria-controls="collapseOne">
                ${element.name}
              </button>
            </h2>
            <div id="${name}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  <h5>Trainer: ${element.trainer}</h5>
                  <h6>Students:</h6>
                  <div id="${element.trainer}">

                  </div> 
              </div>
            </div>
          </div>`
          return html
        });
        return html
    },

}
self.addEventListener("message", async (e)=>{
    postMessage(await ws[e.data.module](e.data.data))
})