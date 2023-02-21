import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Index from "../pages/admin/dashboard/index";

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
    path: "/admin/dashboard",
    component: Index,
    isShow: true,
    title: "看板",
    icon: "area-chart",
  },
  {
    path: "/admin/products/edit",
    component: Edit,
    isShow: false,
    title: "编辑",
  },
  {
    path: "/admin/products/list",
    component: List,
    isShow: true,
    title: "商品列表",
    icon: "shop",
  },
];
