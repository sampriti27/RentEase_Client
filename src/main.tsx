import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider autoHideDuration={3000}>
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </QueryClientProvider>
);
