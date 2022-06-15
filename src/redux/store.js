import {configureStore} from "@reduxjs/toolkit";
import crudReucer from "./CrudSclice"


export const store = configureStore({
    reducer: {
        crud : crudReucer
    }
})