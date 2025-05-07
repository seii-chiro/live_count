import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "@/layout/RootLayout"
import Map from "@/map/Map"
import { Suspense } from "react"
import Spinner from "@/components/Spinner"

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>404</div>
    },

    {
      path: "/",
      element: <RootLayout />
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
