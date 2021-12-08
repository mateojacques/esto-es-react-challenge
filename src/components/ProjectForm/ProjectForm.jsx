import styles from "./projectForm.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";
import SelectField from "./SelectField";

const ProjectForm = ({ action, projectToEdit }) => {
    const navigate = useNavigate()

  const [project, setProjecct] = useState({
    id: 0,
    name: "",
    description: "",
    pm: "",
    assignedTo: "",
    status: 0,
  });

  const validate = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    description: Yup.string().required("La descripción es requerida"),
    pm: Yup.string().required("El Project Manager es requerido"),
    assignedTo: Yup.string().required(
      "Debe especificar a quien está asignada esta tarea"
    ),
    status: Yup.string().required("El status debe ser especificado"),
  });

  function handleSubmit(values, resetForm) {
    const existingProjects = localStorage.getItem("projects");
    const { name, description, pm, assignedTo, status } = values;
    const date = new Date().toLocaleString();

    if (action === "add") {
      if (existingProjects) {
        const projectsArray = JSON.parse(existingProjects);
        const newProject = {
          name,
          description,
          pm,
          assignedTo,
          status,
          date,
        };
        projectsArray.push(newProject);
        localStorage.setItem("projects", JSON.stringify(projectsArray));
      } else {
        const newProject = {
          name,
          description,
          pm,
          assignedTo,
          status,
          date,
        };
        localStorage.setItem("projects", JSON.stringify([newProject]));
        resetForm();
        navigate("/");
      }
    } else {
      const projectsArray = JSON.parse(existingProjects);
      const filteredProjects = projectsArray.filter(
        (project) => project.name !== projectToEdit.name
      );
      const newProject = {
        name,
        description,
        pm,
        assignedTo,
        status,
        date,
      };
      filteredProjects.push(newProject);
      localStorage.setItem("projects", JSON.stringify(filteredProjects));
      window.location.reload();
    } 
  }

  useEffect(() => {
    if (projectToEdit) {
      setProjecct({
        id: 0,
        name: projectToEdit.name,
        description: projectToEdit.description,
        pm: projectToEdit.pm,
        assignedTo: projectToEdit.assignedTo,
        status: projectToEdit.status,
      });
    }
  }, [projectToEdit]);

  return (
    <div>
      <Formik
        initialValues={project}
        enableReinitialize
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        <Form className={`${styles.form} mt-3 px-3 pt-5 pb-5`}>
          <InputField label="Project name" name="name" type="text" />
          <InputField label="Description" name="description" type="text" />
          <SelectField
            label="Project manager"
            name="pm"
            options={["Walt Cosani"]}
          />
          <SelectField
            label="Assigned to"
            name="assignedTo"
            options={["Ignacio Truffa"]}
          />
          <SelectField
            label="Status"
            name="status"
            options={["Enabled", "Disabled"]}
          />
          <input
            type="submit"
            className="btn btn-danger p-2 mt-3"
            value={action === "add" ? "CREATE PROJECT" : "EDIT PROJECT"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ProjectForm;
