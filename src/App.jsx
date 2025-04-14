import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

// Import pages (to be created)
const Home = () => <div>Home Page</div>
const Comics = () => <div>Comics Page</div>
const Submit = () => <div>Submit Page</div>

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {/* NavBar will be added here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
        {/* Footer will be added here */}
      </div>
    </ThemeProvider>
  )
}

export default App
