import type { RootState } from "@/core/types/store.type";

import { useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
