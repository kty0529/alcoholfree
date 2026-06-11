import { createHashRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./pages/Main";
import { Detail } from "./pages/Detail";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:page_id",
    element: <Detail />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="mx-auto flex w-full max-w-[425px] min-h-screen flex-col">
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}
