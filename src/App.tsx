import MainRouter from "./routes";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider"; 

function App() {
  return (
    <TaskContextProvider>
      <MainRouter />
    </TaskContextProvider>
  );
}

export default App;
