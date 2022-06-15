import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getdata = createAsyncThunk("getdata", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = data.json();
  return json;
});
const initialState = {
  test: [],
  data: [
    {
      id: 3456,
      name: "kazinayeem",
      email: "kazi@gmai.com",
      complete: false,
    },
    {
      id: 1779797,
      name: "kazinayeem1",
      email: "kazi1@gmail.com",
      complete: true,
    },
  ],
  count: 0,
};

export const CrudSclice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    deletetodo: (state, action) => {
      const filter = state.data.filter((d) => d.id !== action.payload);
      return {
        ...state,
        data: filter,
      };
    },

    searchtodo: (state, action) => {
      const search = state.data.filter((d) =>
        d.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        data: search,
      };
    },
    completeTodos: (state, action) => {
      const dd = state.data.find((d) => d.id === action.payload);
      if (dd.complete === false) {
        dd.complete = true;
      } else {
        dd.complete = false;
      }
    },

    updatetodo: (state, action) => {
      const isCheck = state.data.find((d) => d.id === action.payload.id);
      isCheck.name = action.payload.name;
      isCheck.email = action.payload.email;
    },
  },
  extraReducers: {
    [getdata.pending]: () => {
      console.log("pending");
    },
    [getdata.fulfilled]: (state, action) => {
      return {
        ...state,
        test: action.payload,
      };
    },
    [getdata.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const {
  addtodo,
  deletetodo,
  searchtodo,
  completeTodos,
  updatetodo,
} = CrudSclice.actions;

export default CrudSclice.reducer;
