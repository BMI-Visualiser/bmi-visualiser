import { Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import Box from "@mui/material/Box"
import { useAtomValue } from "jotai"
import heightAtom from "@jotai/atoms/heightAtom"
import useBmi from "hooks/useBmi"
import { useLang } from "@jotai/atoms/langAtom"

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
const underweightMin = 15
const underweightMax = 18.5
const normalWeightMax = 25
const overweightMax = 30
const classOneObesityMax = 35
const classTwoObesityMax = 40

export default function BmiLinearBar () {
  const height = useAtomValue(heightAtom)
  const lang = useLang()
  const bmi = useBmi()
  const left = (((bmi - underweightMin) / (classTwoObesityMax - underweightMin)) * 100) + '%'
  return (
    <Box sx={RootStyle}>
      <Box sx={[MarkerStyle, { left }]} />
      <Box sx={LineStyle}>
        {/* Underweight 15-18.5 */}
        <Box sx={UnderweightStyle}><Typography variant="body2" sx={LightTextStyle}>{lang.underweight}<br />15-18.5</Typography></Box>
        {/* Normal 18.5-25 */}
        <Box sx={NormalWeightStyle}><Typography variant="body2" sx={LightTextStyle}>{lang.normal}<br />18.5-25</Typography></Box>
        {/* Overweight 25-30 */}
        <Box sx={OverweightStyle}><Typography variant="body2" sx={LightTextStyle}>{lang.overweight}<br />25-30</Typography></Box>
        {/* Class 1 Obesity 30-35 */}
        <Box sx={ClassOneObesityStyle}><Typography variant="body2" sx={LightTextStyle}>{lang.classOneObesity}<br />30-35</Typography></Box>
        {/* Class 2 Obesity 35-40 */}
        <Box sx={ClassTwoObesityStyle}><Typography variant="body2" sx={LightTextStyle}>{lang.classTwoObesity}<br />35-40</Typography></Box>
      </Box>
    </Box>
  )
}

const RootStyle: SystemStyleObject<Theme> = {
  position: 'relative',
}

const MarkerStyle: SystemStyleObject<Theme> = {
  position: 'relative',
  width: 0,
  height: 0,
  borderLeft: '.6rem solid transparent',
  borderRight: '.6rem solid transparent',
  borderTop: '.6rem solid',
  borderTopColor: 'common.black',
  ml: '-.6rem',
  transition: '.4s left',
}

const LineStyle: SystemStyleObject<Theme> = {
  display: 'flex',
  height: '3rem',
}

const LinePartCommonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const UnderweightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  width: (((underweightMax - underweightMin) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'primary.light',
}

const NormalWeightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  width: (((normalWeightMax - underweightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'success.light',
}

const OverweightStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  width: (((overweightMax - normalWeightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
  backgroundColor: 'warning.light',
}

const ClassOneObesityStyle: SystemStyleObject<Theme> = {
  ...LinePartCommonStyle,
  width: (((classOneObesityMax - overweightMax) / (classTwoObesityMax - underweightMin)) * 100) + '%',
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
