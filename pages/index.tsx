import Container from '@mui/material/Container'
import BodyForm from '@components/BodyForm'
import BmiLinearBar from '@components/BmiLinearBar'
import NormalRange from '@components/NormalRange'
import Grid from '@mui/material/Grid'

export default function Home() {
  return (
    <main>
      <Container>
        <Grid container spacing={2}>

          <Grid item md={5}>
            <BodyForm />
          </Grid>
          <Grid item md={7}>
            <BmiLinearBar />
          </Grid>
        </Grid>


        <NormalRange />
      </Container>
    </main>
  )
}
