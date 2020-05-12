const createDomEl = (employee) => {
  return `
    <article class="employee">
    <header class="employee__name">
        <h1>${employee.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employee.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${employee.computer.name}
    </section>
</article>
    `;
};

export default createDomEl;
