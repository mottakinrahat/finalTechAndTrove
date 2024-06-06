import { Drawer } from "@mui/material/Drawer";
import { USER_ROLE } from "./../contants/role";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type USER_ROLE = {
  admin: string;
  moderator: string;
};
export type UserRole = keyof typeof USER_ROLE;
export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}
