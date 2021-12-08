import "./App.css";
import { Header, ProjectForm, ProjectList } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid p-2">
      <Routes>
        <Route exact path="/" element={
          <>
          <Header />
          <ProjectList/>
          </>
        }/>
        <Route exact path="/add" element={
          <>
          <Header onFormView={true} isAdding={true}/>
          <ProjectForm action="add"/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
