import Typography from "@mui/material/Typography";

export default function Introduction () {
  return (
    <>
      <Typography variant="h4" component="h2">
        What is BMI?
      </Typography>
      <Typography variant="body1">
        Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
      </Typography>
      <br />
      <Typography variant="body2">
        Information provided by <a href="https://en.wikipedia.org/wiki/Body_mass_index" target="_blank" rel="noopener noreferrer">Wikipedia</a>
      </Typography>
    </>
  )
}
