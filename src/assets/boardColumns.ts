import { statusColors } from "./colors";
import { type StatusType } from "@shared-types/filters";
import { Status } from "./filters";

export const boardColumns: {
  key: StatusType;
  title: string;
  color: string;
}[] = Object.entries(Status).map(([key, title]) => ({
  key: key as StatusType,
  title,
  color: statusColors[key as StatusType],
}));
