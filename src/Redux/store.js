import { configureStore } from "@reduxjs/toolkit";

import imagereducer from './Slices/slice';



export const store = configureStore({
    reducer: imagereducer ,
});

