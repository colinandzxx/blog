import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import scrollTo from "./scrollTo";

export const rootPersistConfig = {
  key: "root",
  storage: storage,
//   stateReconciler: autoMergeLevel2,
  whitelist: ["scrollTo"]
};

export const rootReducer = combineReducers({ scrollTo });
