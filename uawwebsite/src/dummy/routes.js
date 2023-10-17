import { lazy } from "react";
const Home = lazy(() => import("../component/pages/home/Home"));
const About = lazy(() => import("../component/pages/about/About"));
const Services = lazy(() => import("../component/pages/service/Service"));
const Partners = lazy(() => import("../component/pages/partners/Partners"));
const Careers = lazy(() => import("../component/pages/careers/Careers"));
const Contact = lazy(() => import("../component/pages/contact/Contact"));

const routes = [
  {
    path: "/",
    identifier: "home",
    components: <Home />,
    isPrivate: false,
  },
  {
    path: "about",
    identifier: "about",
    components: <About />,
    isPrivate: false,
  },
  {
    path: "services",
    identifier: "services",
    components: <Services />,
    isPrivate: false,
  },
  {
    path: "partners",
    identifier: "partners",
    components: <Partners />,
    isPrivate: false,
  },
  {
    path: "careers",
    identifier: "careers",
    components: <Careers />,
    isPrivate: false,
  },
  {
    path: "contact",
    identifier: "contact",
    components: <Contact />,
    isPrivate: false,
  },
];

export default routes;
