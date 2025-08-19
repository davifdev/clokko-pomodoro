import MainRouter from "./routes";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import MesageContainer from "./components/mesage-container";

function App() {
  return (
    <TaskContextProvider>
      <MesageContainer>
        <MainRouter />
      </MesageContainer>
    </TaskContextProvider>
  );
}

export default App;
