import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./reducers";

// export default createStore(rootReducer);

const reducer = persistReducer(rootPersistConfig, rootReducer); // 包装rootReducer
export const store = createStore(reducer); // 传递给createStore函数 这个export
export const persistor = persistStore(store); // 包装store 这个也export
