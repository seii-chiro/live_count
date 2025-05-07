import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "@/layout/RootLayout"
import Map from "@/map/Map"
import { Suspense } from "react"
import Spinner from "@/components/Spinner"
import Results from "./pages/Results"
import Senate from "./pages/Senate"
import PartyList from "./pages/PartyList"
import Local from "./pages/Local"

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
  ])


  return (
    <Suspense fallback={<Spinner />} >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
