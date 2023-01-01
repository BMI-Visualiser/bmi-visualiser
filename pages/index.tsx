import Container from '@mui/material/Container'
import BodyForm from '@components/BodyForm'
import BmiLinearBar from '@components/BmiLinearBar'
import Grid from '@mui/material/Grid'
import Introduction from '@components/Introduction'

export default function Home() {
  return (
    <main>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <BodyForm />
          </Grid>
          <Grid item xs={12} md={7}>
            <BmiLinearBar />
          </Grid>
          <Grid item xs={12}>
            <Introduction />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
