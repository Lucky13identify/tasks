import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Notiflix from 'notiflix';
import { deleteTask, updateTask } from '../../redux/tasks/operations';
import { formatDateString } from '../../utils/dateFormatForButton';
import {
  Input,
  ContainerButton,
  ContainerTask,
  Button,
  ButtonText,
  Form,
} from './taskCard.styled';

export const TaskCard = ({ task }) => {
  const [inputValue, setInputValue] = useState(task.taskName);
  const [startDate, setStartDate] = useState(task.startDate);
  const [finishDate, setFinishDate] = useState(task.finishDate);
  const [isButtonStartOpen, setIsButtonStartOpen] = useState(false);
  const [isButtonFinishOpen, setIsButtonFinishOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const onDelete = id => {
    dispatch(deleteTask(id));
    Notiflix.Notify.warning('Task has deleted');
  };

  const editTask = e => {
    e.preventDefault();
    try {
      dispatch(
        updateTask({
          id: task.id,
          updatedData: { taskName: inputValue, startDate, finishDate },
        })
      );
      Notiflix.Notify.success('Task has updated');
    } catch (error) {
      throw error;
    }
  };

  return (
    <Form onSubmit={editTask}>
      <ContainerTask>
        <Input
          type="text"
          placeholder="task"
          value={inputValue}
          onChange={handleChange}
        />
        <ContainerButton>
          <div>
            <ButtonText>Start date</ButtonText>
            <Button
              type="button"
              onClick={() => setIsButtonStartOpen(!isButtonStartOpen)}
            >
              {formatDateString(startDate)}
            </Button>
          </div>
          {isButtonStartOpen && (
            <Calendar
              name="Start date"
              onChange={e => {
                setIsButtonStartOpen(!isButtonStartOpen);
                setStartDate(e);
              }}
              value={startDate}
            />
          )}

          <div>
            <ButtonText>Finish date</ButtonText>
            <Button
              type="button"
              onClick={() => setIsButtonFinishOpen(!isButtonFinishOpen)}
            >
              {formatDateString(finishDate)}
            </Button>
          </div>
          {isButtonFinishOpen && (
            <Calendar
              name="Finish date"
              onChange={e => {
                setIsButtonFinishOpen(!isButtonFinishOpen);
                setFinishDate(e);
              }}
              value={finishDate}
            />
          )}
        </ContainerButton>
      </ContainerTask>
      <ContainerButton>
        <Button type="submit">Edit</Button>
        <Button
          type="button"
          onClick={() => {
            onDelete(task.id);
          }}
        >
          Delete
        </Button>
      </ContainerButton>
    </Form>
  );
};
