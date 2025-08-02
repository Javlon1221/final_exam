import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Saved from "./saved";
import StudentCreate from "./student-create";
import Detail from "./detail";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "student-create/:id?",
          element: <StudentCreate />,
        },
        {
          path: "saved",
          element: <Saved />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
