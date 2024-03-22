import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts/fonts.css";
import "./index.css";
import "react-quill/dist/quill.bubble.css";
import "react-responsive-modal/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
