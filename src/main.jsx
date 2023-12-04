import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts/fonts.css";
import "./index.css";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });
// <QueryClientProvider client={queryClient}></QueryClientProvider>;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
