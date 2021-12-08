import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ onFormView, isAdding, isEditing }) => {
  return (
    <header className={`${styles.header} w-100 d-flex flex-column`}>
      <div className="w-100 border-bottom p-3 px-md-5">
        <a href="/">
          <img src={logo} alt="Esto es" />
        </a>
      </div>

      {onFormView ? (
        <div
          className={`${styles.projectBar} w-100 border-bottom py-2 pe-3 px-md-5 d-flex justify-content-between align-items-center`}
        >
          
          <Link to="/" className="btn">
            <i className="bi-arrow-left"></i> Back
          </Link>
          <h3 className="m-0">{isAdding && "Add project"} {isEditing && "Edit project"}</h3>
        </div>
      ) : (
        <div
          className={`${styles.projectBar} w-100 border-bottom p-2 px-md-5 d-flex justify-content-between align-items-center`}
        >
          <h3 className="m-0">My projects</h3>
          <Link to="/add" className="btn btn-danger">
            <i className="bi-plus"></i> Add project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
