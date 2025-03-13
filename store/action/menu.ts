import { Item } from "@/types/menu";
import { createAction } from "@reduxjs/toolkit";

// Định nghĩa các action
export const setSelectedMenu = createAction<Item>("menu/setMenu");
