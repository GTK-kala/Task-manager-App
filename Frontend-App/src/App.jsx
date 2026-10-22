import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className:
              "!rounded-2xl !bg-surface !text-ink !shadow-lg !text-sm !font-semibold",
            duration: 2600,
          }}
        />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
