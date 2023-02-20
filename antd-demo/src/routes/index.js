import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";

export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: PageNotFound,
  },
];
export const adminRouters = [
  {
    path: "/admin/products/edit",
    component: Edit,
  },
  {
    path: "/admin/products/list",
    component: List,
  },
];
