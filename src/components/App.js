import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { Projects } from "../pages/Projects/Projects";
import { AllTasks } from "./projects/AllTasks/AllTasks";
import { ToDo } from "./projects/To_do/To_do";
import { InProgress } from "./projects/In_progres/In_progres";
import { Done } from "./projects/Done/Done";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/projects" element={<Projects />}>
            <Route path="all_tasks" element={<AllTasks />} />
            <Route path="to_do" element={<ToDo />} />
            <Route path="in_progress" element={<InProgress />} />
            <Route path="done" element={<Done />} />
          </Route>
          <Route path="/user" element={<div>User</div>} />
          <Route path="/calendar" element={<div>Calendar</div>} />
          <Route path="/meetings" element={<div>Meetings</div>} />
          <Route path="/statistics" element={<div>Statistics</div>} />
          <Route path="/cloud_storage" element={<div>Cloud_storage</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
