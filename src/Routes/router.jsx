import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../Components/Layout"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const AboutPage = lazy(() => import("../Pages/AboutPage"));
const ProjectsPage = lazy(() => import("../Pages/ProjectsPage"));
const ContactPage = lazy(() => import("../Pages/ContactPage"));

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    errorElement: <p>error</p>,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "/about",
            element: <AboutPage/>
        },
        {
            path: "/projects",
            element: <ProjectsPage />
        },
        {
            path: "/contact",
            element: <ContactPage />
        }
    ]
}])

export default router;