import Container from '@mui/material/Container'
import BodyForm from '@components/BodyForm'
import BmiLinearBar from '@components/BmiLinearBar'

export default function Home() {
  return (
    <main>
      <Container>
        <BodyForm />
        <BmiLinearBar />
      </Container>
    </main>
  )
}
