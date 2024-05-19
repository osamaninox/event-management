import { BrowserRouter as Router, useRoutes  } from "react-router-dom";
import RoutesConfig from './routesConfig' ;
import { AuthProvider } from './views/auth/AuthContext';
import "./App.css";



const AppRoutes = () => {
  const routes = RoutesConfig();
  return useRoutes(routes);
};
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
