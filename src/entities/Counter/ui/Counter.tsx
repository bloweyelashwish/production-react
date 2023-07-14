import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = (props: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    dispatch(counterActions.increment());
  };
  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="value-title">
      <h1>{counterValue}</h1>
      <Button onClick={inc} data-testid="increment-btn"></Button>
      <Button onClick={dec} data-testid="decrement-btn"></Button>
    </div>
  );
};
