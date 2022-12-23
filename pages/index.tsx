import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '@redux/reducer'
import BodyForm from '@components/BodyForm'

export default function Home() {
  return (
    <main>
      <Container>
        <BodyForm />
      </Container>
    </main>
  )
}
