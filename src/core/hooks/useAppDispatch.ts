import { AppDispatch } from "@/core/types/store.type";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
