import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch = (): AppDispatch => useDispatch();
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);


