import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "@/layout/RootLayout"
import { lazy, Suspense } from "react"
import Spinner from "@/components/Spinner"
import Settings from "./pages/Settings";

const Results = lazy(() => import("./pages/Results"));
const Senate = lazy(() => import("./pages/Senate"));
const PartyList = lazy(() => import("./pages/PartyList"));
const Local = lazy(() => import("./pages/Local"));
const Map = lazy(() => import("@/map/Map"));

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>404</div>
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Results />
        },
        {
          path: "results",
          element: <Results />
        },
        {
          path: "senate",
          element: <Senate />
        },
        {
          path: "party-list",
          element: <PartyList />
        },
        {
          path: "local",
          element: <Local />
        },
      ]
    },
    {
      path: "map",
      element: <Map />
    },
    {
      path: "settings",
      element: <Settings />
    }
  ])


  return (
    <Suspense fallback={<Spinner />} >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
