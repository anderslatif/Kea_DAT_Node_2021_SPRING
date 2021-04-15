// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("projects");

    result.projects.map(project => {
        const projectDiv = document.createElement("div");

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.innerText = project.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectsDiv.appendChild(projectDiv);
    });
})();


