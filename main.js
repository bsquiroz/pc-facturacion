const dataDashboard = {
  income: [
    {
      id: 1,
      name: "Julio del catillo",
      date: "Hace 2 días",
      value: "+ $12 USD",
    },
    {
      id: 2,
      name: "John doe",
      date: "Hace 3 días",
      value: "+ $15 USD",
    },
    {
      id: 3,
      name: "Carmen julia",
      date: "Hace 1 día",
      value: "+ $9 USD",
    },
    {
      id: 4,
      name: "Monica jaramillo",
      date: "Hace 5 días",
      value: "+ $11 USD",
    },
    {
      id: 5,
      name: "Rosario pacheco",
      date: "Hace 10 días",
      value: "+ $54 USD",
    },
    {
      id: 6,
      name: "Stiven quiroz",
      date: "Hace 11 días",
      value: "+ $110 USD",
    },
  ],
  egress: [
    {
      id: 1,
      name: "Camilo muñoz",
      date: "Hace 1 día",
      value: "- $120 USD",
    },
    {
      id: 2,
      name: "Empresas Joe",
      date: "Hace 2 días",
      value: "- $15 USD",
    },
    {
      id: 3,
      name: "Mariana quiroz",
      date: "Hace 1 día",
      value: "- $90 USD",
    },
    {
      id: 4,
      name: "Juan monsalve",
      date: "Hace 2 días",
      value: "- $110 USD",
    },
    {
      id: 4,
      name: "Leonel alvarez",
      date: "Hace 2 días",
      value: "- $60 USD",
    },
    {
      id: 5,
      name: "James falcao",
      date: "Hace 3 días",
      value: "- $11 USD",
    },
  ],
};

const income = document.querySelector("#income");
const egress = document.querySelector("#egress");

function printDataDashboard() {
  let html = "";

  dataDashboard.income.forEach(({ date, id, name, value }) => {
    html += `
              <div class="dashboard__card" id="cardIncome-${id}">
                <i class="bx bxs-user-rectangle"></i>
                <div>
                  <p>${name}</p>
                  <p>${date}</p>
                </div>
                <p class="dashboard__card__value--income">${value}</p>
              </div>
    `;
  });

  income.innerHTML = html;
  html = "";

  dataDashboard.egress.forEach(({ date, id, name, value }) => {
    html += `
            <div class="dashboard__card dashboard__card--egress" id="cardIncome-${id}">
              <i class="bx bx-buildings"></i>
              <div>
                <p>${name}</p>
                <p>${date}</p>
              </div>
              <p class="dashboard__card__value--egress">${value}</p>
            </div>
    `;
  });

  egress.innerHTML = html;
}

function printChart() {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      datasets: [
        {
          label: "# de ingresos",
          data: [12, 19, 3, 5, 2, 30],
          borderWidth: 1,
          backgroundColor: "#acc2ef",
        },
      ],
    },
  });
}

function main() {
  printChart();
  printDataDashboard();
}

main();
