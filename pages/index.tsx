import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import example, { equalityFunction as exampleEqualityFunction, State as ExampleState } from '@redux/slices/example';
import { State } from '@redux/reducer';

export default function Home() {
  const dispatch = useDispatch()
  const exampleState = useSelector<State, ExampleState>(state => state.example, exampleEqualityFunction);
  return (
    <main>
      <Container>
        <Typography onClick={() => dispatch(example.actions.increment())}>{exampleState.value}</Typography>
      </Container>
    </main>
  )
}
