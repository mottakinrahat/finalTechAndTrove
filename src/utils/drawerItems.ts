import DashboardIcon from "@mui/icons-material/Dashboard";
import { DrawerItem, UserRole } from "@/types";
import { USER_ROLE } from "@/contants/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Smart-watch",
          path: `${role}/smartwatch`,
          icon: DashboardIcon,
        },
        {
          title: "Ear-buds",
          path: `${role}/earbuds`,
          icon: DashboardIcon,
        },
        {
          title: "Order",
          path: `${role}/orders`,
          icon: DashboardIcon,
        }
      );
      break;
    case USER_ROLE.MODERATOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Smart-watch",
          path: `${role}/smartwatch`,
          icon: DashboardIcon,
        },
        {
          title: "Ear-buds",
          path: `${role}/earbuds`,
          icon: DashboardIcon,
        }
      );
      break;
  }
  return [...roleMenus];
};
