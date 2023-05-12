import {getCamperId} from "../../api/apiCampers.js"
let ws = {
    async putCamper(id){
        let data = await getCamperId(id)
        let html = ``
          html =/*html*/`
          <h1>Edit camper</h1>
          <form id="finish">
              <input value="${data.name}" class="forminput" type="text" placeholder="Camper's name" name="name" required>
              <input value="${data.age}" class="forminput" type="text" placeholder="Camper's age" name="age" required>
              <input value="${data.phone}" class="forminput" type="text" placeholder="Camper's phone number" name="phone" required>
              <input value="${data.email}" class="forminput" type="email" placeholder="Camper's email" name="email" required>
              <input value="${data.adress}" class="forminput" type="text" placeholder="Camper's adress" name="adress" required>
              <label class="forminput" for=""><i>Camper's birth date</i></label>
              <input value="${data.birth}" class="forminput" type="date" name="birth" required>
              <input value="${data.idNumber}" class="forminput" type="text" placeholder="Camper's ID number" name="idNumber" required>
              <label class="forminput" for=""><i>Camper's entry date</i></label>
              <input value="${data.entry}" class="forminput" type="date" placeholder="Camper's entry date" name="entry" required>
              <select class="forminput"  name="teamId" required>
                  <option value="" selected>Select Camper's team</option>
                  <option value="1">Sputnik</option>
                  <option value="2">Artemis</option>
                  <option value="3">Apollo</option>
              </select>
              <button type="submit" class="forminput">Finish</button>
          </form>
          `
          return html
      }
  }
  
self.addEventListener("message", async(e)=>{
      postMessage(await ws[e.data.module](e.data.data))
})
