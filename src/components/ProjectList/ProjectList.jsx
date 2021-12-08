import { useState, useEffect } from "react";
import Project from "./Project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  function handleRemoveProject(projectName){
    const updatedArray = projects.filter(project => projectName !== project.name)
    setProjects(updatedArray)
    localStorage.setItem('projects', JSON.stringify(updatedArray))
}

  useEffect(() => {
    const existingProjects = localStorage.getItem("projects");
    if (existingProjects) {
      setProjects(JSON.parse(existingProjects));
    } else return;
  }, []);

  return (
    <main
      className="mt-3 d-flex flex-column"
      style={{ backgroundColor: "#fff" }}
    >
      {projects.length > 0 ? (
        <>
        {projects.map((project, i) => (
            <Project key={i} project={project} name={project.name} date={project.date} assignedTo={project.assignedTo} handleRemoveProject={handleRemoveProject}/>
        ))}
          
        </>
      ) : (
        <div className="p-3 text-center">No projects added yet.</div>
      )}
    </main>
  );
};

export default ProjectList;
