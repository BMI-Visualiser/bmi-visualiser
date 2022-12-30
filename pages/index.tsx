import Container from '@mui/material/Container'
import BodyForm from '@components/BodyForm'
import BmiLinearBar from '@components/BmiLinearBar'
import NormalRange from '@components/NormalRange'

export default function Home() {
  return (
    <main>
      <Container>
        <BodyForm />
        <BmiLinearBar />
        <NormalRange />
      </Container>
    </main>
  )
}
