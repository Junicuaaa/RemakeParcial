import { getCampers } from "../../api/apiCampers.js";

let ws = {
    async showCampers(){
        let data = await getCampers()
        let html = ``
        data.forEach(element => {
            let name = element.name.replace(/\s+/g, '')
            html +=/*html*/`            
            <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${name}" aria-expanded="false" aria-controls="collapseOne">
                ${element.name}
              </button>
            </h2>
            <div id="${name}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                    <i>Name</i> <h6>${element.name}</h6>
                    <i>Age</i> <h6>${element.age}</h6>
                    <i>Phone</i> <h6>${element.phone}</h6>
                    <i>Email</i> <h6>${element.email}</h6>
                    <i>Adress</i> <h6>${element.adress}</h6>
                    <i>Id</i> <h6>${element.idNumber}</h6>
                    <i>Birth</i> <h6>${element.birth}</h6>
                    <i>Entry</i> <h6>${element.entry}</h6>
                    <i>Team</i> <h6>${element.team.name}</h6>
                    <button type="button" class ="${element.id} delete btn btn-danger">Delete Camper</button>
                    <button type="button" class ="${element.id} edit btn btn-warning">Edit Camper</button>
              </div>
            </div>
          </div>`
          return html
        });
        return html
    },
    async agefilter(){
      let data = await getCampers()
      let html = ``
      data.forEach(element => {        
        if (element.age < 18) {
          let name = element.name.replace(/\s+/g, '')
          html +=/*html*/`            
          <div class="accordion-item mt-2">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${name}" aria-expanded="false" aria-controls="collapseOne">
              ${element.name}
            </button>
          </h2>
          <div id="${name}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                  <i>Name</i> <h6>${element.name}</h6>
                  <i>Age</i> <h6>${element.age}</h6>
                  <i>Phone</i> <h6>${element.phone}</h6>
                  <i>Email</i> <h6>${element.email}</h6>
                  <i>Adress</i> <h6>${element.adress}</h6>
                  <i>Id</i> <h6>${element.idNumber}</h6>
                  <i>Birth</i> <h6>${element.birth}</h6>
                  <i>Entry</i> <h6>${element.entry}</h6>
                  <i>Team</i> <h6>${element.team.name}</h6>
                  <button type="button" class ="${element.id} delete btn btn-danger">Delete Camper</button>
                  <button type="button" class ="${element.id} edit btn btn-warning">Edit Camper</button>
            </div>
          </div>
        </div>`
        return html
        }
        return html
      });
      return html
    }
}

self.addEventListener("message", async(e)=>{
    postMessage(await ws[e.data.module](e.data.data))
})