import { TaskCard } from './taskCard/taskCard';
import { TaskCreator } from './taskCreator/taskCreator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/tasks/operations';
import { useSelector } from 'react-redux';
import { CardsContainer } from './app.styled';

export const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="container">
      <TaskCreator />
      <CardsContainer>
        {tasks.length >= 0 &&
          tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </CardsContainer>
    </div>
  );
};
