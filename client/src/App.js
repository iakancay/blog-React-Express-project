import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import PostsPage from "./views/PostsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetail from "./views/PostDetail";
import { PostsProvider } from "./contexts/PostsProvider";
import { ThemeContext } from "./contexts/ThemeProvider";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const themeLight = createTheme({
    palette: {
      mode: "light",
      background: { paper: "#e5e5dc", default: "#ecece5" },
      text: { primary: "#658134" },
    },
  });
  const themeDark = createTheme({
    palette: {
      mode: "dark",
      text: { primary: "#658134" },
    },
  });
  const theme = isDarkMode ? themeDark : themeLight;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PostsProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
          </Router>
        </PostsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
