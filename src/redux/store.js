import { createStore, applyMiddleware } from "redux";

//it allows the browser to cache or store
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//Creating the new persistor version of store
export const persistor = persistStore(store);

export default { store, persistor };
