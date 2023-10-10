import { lazy } from "react";
const Home = lazy(() => import("../component/pages/home/Home"));
const About = lazy(() => import("../component/pages/about/About"));
const Services = lazy(() => import("../component/pages/service/Service"));
const Careers = lazy(() => import("../component/pages/careers/Careers"));

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
    path: "careers",
    identifier: "careers",
    components: <Careers />,
    isPrivate: false,
  },
];

export default routes;
