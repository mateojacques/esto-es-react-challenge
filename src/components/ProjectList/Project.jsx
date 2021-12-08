import styles from "./project.module.css";
import { useState } from "react";

import { ProjectForm } from "..";

const Project = ({ project, name, date, assignedTo, handleRemoveProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function toggleMenu() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  function toggleEditing() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  return (
<>
    <article
      className={`${styles.project} w-100 d-flex flex-column p-3 p-md-4 border-bottom`}
    >
      <h5>{name}</h5>
      <p style={{color: "#888"}}>Creation date: {date}</p>
      <div className="d-flex align-items-center">
        <i className="bi-person-fill me-3"></i>
        <p className="m-0">{assignedTo}</p>
      </div>

      <button className={`${styles.optionsBtn} btn`} onClick={toggleMenu}>
        <i className="bi-three-dots-vertical"></i>
      </button>

      {isMenuOpen && (
        <div className={`${styles.menu} d-flex flex-column bg-light`}>
          <div className="d-flex p-2 justify-content-center align-items-center border-bottom" onClick={() => {
              toggleEditing()
              setIsMenuOpen(false)
              }}>
            <i className="bi-pencil-square me-3"></i> Edit
          </div>
          <div className="d-flex p-2 justify-content-center align-items-center border-bottom" onClick={() => {
              handleRemoveProject(name)
              setIsMenuOpen(false)
              }}>
            <i className="bi-trash me-3"></i> Remove
          </div>
        </div>
      )}
    </article>
    
    
    {isEditing && <ProjectForm action="edit" projectToEdit={project}/>}
    </>
  );
};

export default Project;
