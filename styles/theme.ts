import { createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'

export default createTheme({
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'sm' },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { marginBottom: '2rem' },
      },
    },
  },
}, enUS)
