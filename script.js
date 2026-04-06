let data = {
  skills: ["Data Analysis","Power BI","MATLAB","AI Basics","Excel"],

  projects: [
    {
      title: "Sales Dashboard",
      desc: "Created Power BI dashboard for sales insights"
    },
    {
      title: "Student Analysis",
      desc: "Analyzed student data using charts"
    }
  ],

  certs: [
    {
      title: "Deloitte Data Analytics",
      img: "images/deloitte.jpg"
    },
    {
      title: "Yuva AI for All",
      img: "images/nasscom.jpg"
    },
    {
      title: "Power BI Workshop",
      img: "images/powerbi.jpg"
    },
    {
      title: "MATLAB Course",
      img: "images/matlab.jpg"
    },
    {
      title: "Chemistry Course",
      img: "images/chemistry.jpg"
    }
  ]
};

function render(){

  document.getElementById("skillsList").innerHTML =
    data.skills.map(s => `<div class="card">${s}</div>`).join("");

  document.getElementById("projectList").innerHTML =
    data.projects.map(p => `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `).join("");

  document.getElementById("certList").innerHTML =
    data.certs.map(c => `
      <div class="card">
        <img src="${c.img}" style="width:100%;border-radius:8px;">
        <h3>${c.title}</h3>
      </div>
    `).join("");
}

render();
