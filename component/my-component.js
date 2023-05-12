import { postCampers } from "../api/apiCampers.js";
let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js", "");

export default class myComponent extends HTMLElement{
    static async component(){
        return await (await fetch(pathname.replace(".js", ".html"))).text();
    }
    handleEvent(e){
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        postCampers(data)
        this.form.reset();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        Promise.resolve(myComponent.component()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.form = this.shadowRoot.querySelector("form");
            this.form.addEventListener("submit", this.handleEvent.bind(this));
        })
    }
}
customElements.define(name, myComponent)