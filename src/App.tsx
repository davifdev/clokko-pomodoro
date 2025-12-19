import MessageContainer from './components/message-container';
import { TaskContextProvider } from './contexts/TaskContext/task-context-provider';
import MainRouter from './routes/main-router';

const App = () => {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
};

export default App;
