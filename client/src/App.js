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
  const theme = createTheme({
    palette: {
      mode: `${isDarkMode ? "dark" : "light"}`,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PostsProvider>
          <Navbar />
          <Router>
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
