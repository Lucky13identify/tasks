import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Notiflix from 'notiflix';
import { createTask } from '../../redux/tasks/operations';
import { formatDateString } from '../../utils/dateFormatForButton';
import {
  Form,
  FormContainer,
  Button,
  ContainerButton,
  Input,
  ButtonText,
  Container,
} from './taskCreator.styled';

export const TaskCreator = () => {
  const [taskName, setTask] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [isButtonStartOpen, setIsButtonStartOpen] = useState(false);
  const [isButtonFinishOpen, setIsButtonFinishOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'Task') {
      setTask(e.target.value);
    }
  };

  const submitTask = e => {
    e.preventDefault();

    try {
      dispatch(createTask({ taskName, startDate, finishDate }));
      Notiflix.Notify.success('Task has created');
    } catch (error) {}
  };

  return (
    <FormContainer>
      <Form onSubmit={submitTask}>
        <Input
          name="Task"
          onChange={handleChange}
          type="text"
          placeholder="task"
        />
        <Container>
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
          <ContainerButton>
            <Button type="submit">Add a task</Button>
          </ContainerButton>
        </Container>
      </Form>
    </FormContainer>
  );
};
