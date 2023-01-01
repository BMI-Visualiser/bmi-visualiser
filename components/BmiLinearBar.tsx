import { Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import Box from "@mui/material/Box"
import useBmi from "hooks/useBmi"
import { useLang } from "@jotai/atoms/langAtom"
import config from "@config"
import calculateWeightByBmi from "@utils/calculateWeightByBmi"
import { useAtomValue } from "jotai"
import heightAtom from "@jotai/atoms/heightAtom"

/**
 * This line will be showing:
 * Underweight 15-18.5
 * Normal 18.5-25
 * Overweight 25-30
 * Class 1 Obesity 30-35
 * Class 2 Obesity 35-40
 *
 * The following won't be showing on the line. For reference only:
 * Class 3 Obesity >40
 */
const {
  underweightMin,
  underweightMax,
  normalWeightMax,
  overweightMax,
  classOneObesityMax,
  classTwoObesityMax,
} = config

export default function BmiLinearBar () {
  const lang = useLang()
  const bmi = useBmi()
  const height = useAtomValue(heightAtom)
  const top = (((bmi - underweightMin) / (classTwoObesityMax - underweightMin)) * 100) + '%'

  const underweightMinWeight = calculateWeightByBmi(underweightMin, height)
  const underweightMaxWeight = calculateWeightByBmi(underweightMax, height)
  const normalWeightMaxWeight = calculateWeightByBmi(normalWeightMax, height)
  const overweightMaxWeight = calculateWeightByBmi(overweightMax, height)
  const classOneObesityMaxWeight = calculateWeightByBmi(classOneObesityMax, height)
  const classTwoObesityMaxWeight = calculateWeightByBmi(classTwoObesityMax, height)
  return (
    <Box sx={RootStyle}>
      <Box sx={[MarkerStyle, LeftMarkerStyle, { top }]} />
      <Box sx={[MarkerStyle, RightMarkerStyle, { top }]} />
      <Box sx={LineStyle}>
        {/* Underweight 15-18.5 */}
        <Box sx={UnderweightStyle}>
          <Typography variant="body2" sx={LightTextStyle}>
            {lang.underweight}<br />
            {underweightMin}-{underweightMax}&nbsp;
            ({underweightMinWeight}-{underweightMaxWeight}kg)
          </Typography>
        </Box>
        {/* Normal 18.5-25 */}
        <Box sx={NormalWeightStyle}>
          <Typography variant="body2" sx={LightTextStyle}>
            {lang.normal}<br />
            {underweightMax}-{normalWeightMax}&nbsp;
            ({underweightMaxWeight}-{normalWeightMaxWeight}kg)
          </Typography>
        </Box>
        {/* Overweight 25-30 */}
        <Box sx={OverweightStyle}>
          <Typography variant="body2" sx={LightTextStyle}>
            {lang.overweight}<br />
            {normalWeightMax}-{overweightMax}&nbsp;
            ({normalWeightMaxWeight}-{overweightMaxWeight}kg)
          </Typography>
        </Box>
        {/* Class 1 Obesity 30-35 */}
        <Box sx={ClassOneObesityStyle}>
          <Typography variant="body2" sx={LightTextStyle}>
            {lang.classOneObesity}<br />
            {overweightMax}-{classOneObesityMax}&nbsp;
            ({overweightMaxWeight}-{classOneObesityMaxWeight}kg)
          </Typography>
        </Box>
        {/* Class 2 Obesity 35-40 */}
        <Box sx={ClassTwoObesityStyle}>
          <Typography variant="body2" sx={LightTextStyle}>
            {lang.classTwoObesity}<br />
            {classOneObesityMax}-{classTwoObesityMax}&nbsp;
            ({classOneObesityMaxWeight}-{classTwoObesityMaxWeight}kg)
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const RootStyle: SystemStyleObject<Theme> = {
  position: 'relative',
  mb: 2,
}

const MarkerStyle: SystemStyleObject<Theme> = {
  position: 'absolute',
  width: 0,
  height: 0,
  borderBottom: '.6rem solid transparent',
  borderTop: '.6rem solid transparent',
  mt: '-.6rem',
  transition: '.4s top',
}

const LeftMarkerStyle: SystemStyleObject<Theme> = {
  left: 0,
  borderLeft: '.6rem solid',
  borderLeftColor: 'common.black',
}

const RightMarkerStyle: SystemStyleObject<Theme> = {
  right: 0,
  borderRight: '.6rem solid',
  borderRightColor: 'common.black',
}

const LineStyle: (theme: Theme) => SystemStyleObject<Theme> = (theme: Theme) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '30rem',
  mx: '.6rem',

  [theme.breakpoints.down('sm')]: {
    height: '25rem',
  }
})

const LinePartCommonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const UnderweightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  height: (((underweightMax - underweightMin) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'primary.light',
}

const NormalWeightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  height: (((normalWeightMax - underweightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'success.light',
}

const OverweightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  height: (((overweightMax - normalWeightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'warning.light',
}

const ClassOneObesityStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  height: (((classOneObesityMax - overweightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'error.light',
}

const ClassTwoObesityStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  backgroundColor: 'secondary.dark',
  flex: 1
}

const LightTextStyle: SystemStyleObject<Theme> = {
  color: 'white',
}
