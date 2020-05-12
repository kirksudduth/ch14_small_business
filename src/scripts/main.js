console.log("You can do it, bruddah!");

const apiURL =
  "http://localhost:8100/employees/?_expand=department&_expand=computer";
const apiDepsURL = "http://localhost:8100/departments";
const apiCompsURL = "http://localhost:8100/computers";

const API = {
  getResources() {
    return fetch(`${apiURL}`)
      .then((data) => data.json())
      .then((employees) => {
        console.log(employees);
      });
  },
  getDepartments() {
    return fetch(`${apiDepsURL}`)
      .then((data) => data.json())
      .then((deps) => {
        console.log(deps);
      });
  },
  getComputers() {
    return fetch(`${apiCompsURL}`)
      .then((data) => data.json())
      .then((comps) => {
        console.log(comps);
      });
  },
};
API.getResources();
// API.getDepartments();
// API.getComputers();
