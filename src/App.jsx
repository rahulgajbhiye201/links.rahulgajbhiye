import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, Home } from "@containers";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="bg-neutral-100 text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
