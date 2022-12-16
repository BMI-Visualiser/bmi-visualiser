import { createTheme } from '@mui/material'

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
})
