import NewProject from "./components/NewProject.jsx";
import ProjectsSiderbar from "./components/ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSiderbar />
      <NewProject />
    </main>
  );
}

export default App;
