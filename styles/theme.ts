import { createTheme } from '@mui/material'

export default createTheme({
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'sm' },
    },
  },
})
