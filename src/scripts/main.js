console.log("You can do it, bruddah!");
import renderDomEl from "./renderDomEl.js";
const apiURL =
  "http://localhost:8100/employees/?_expand=department&_expand=computer";

const API = {
  getResources() {
    return fetch(`${apiURL}`).then((data) => data.json());
  },
};
API.getResources().then(renderDomEl);
