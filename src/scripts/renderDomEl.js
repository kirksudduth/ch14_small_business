import createDomEl from "./createDomEl.js";

const empContainer = document.getElementById("employee-container");
const renderDomEl = (employees) => {
  empContainer.innerHTML = "";
  employees.forEach((employee) => {
    empContainer.innerHTML += createDomEl(employee);
  });
};

export default renderDomEl;
