import Box, { BoxProps } from '@mui/material/Box'
import { Breakpoint, Theme } from '@mui/material/styles'
import { CSSSelectorObjectOrCssVariables, SxProps, SystemStyleObject } from '@mui/system'
import { useMemo } from 'react'

export type Space = number

export interface Props extends BoxProps {
  space: Space | Record<Breakpoint, Space>
}

export default function Spacer (props: Props) {
  const { space, sx, ...restProps } = props
  const spaceSx = useMemo<SxProps<Theme>>(() => {
    if (typeof space === 'number') { return { height: `${space}rem` } }
    const keys = Object.keys(space) as Breakpoint[]
    const sx: (theme: Theme) => SystemStyleObject<Theme> = (theme: Theme) => {
      const output: CSSSelectorObjectOrCssVariables<Theme> = {};
      for (const key of keys) {
        const value = space[key]
        const index = theme.breakpoints.up(key)
        output[index] = { height: `${value}rem` }
      }
      return output
    }
    return sx
  }, [space])
  return (
    <Box {...restProps} sx={Array.isArray(sx) ? [...sx, spaceSx] : spaceSx} />
  )
}
