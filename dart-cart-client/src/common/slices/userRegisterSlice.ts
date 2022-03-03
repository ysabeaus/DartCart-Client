import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { User } from "../types";
import axios from "axios";

// JSON server URL. Change to backend URL for testing/in production
const API_URL = process.env.REACT_APP_API_URL;

// createEntityAdapter gives us several premade reducer functions
// for manipulating state. It gives us:
// addOne / addMany: add new items to the state
// upsertOne / upsertMany: add new items or update existing ones
// updateOne / updateMany: update existing items by supplying partial values
// removeOne / removeMany: remove items based on IDs
// setAll: replace all existing items
//
// We also get:
// getInitialState: returns an object that looks like { ids: [], entities: {} },
// for storing a normalized state of items along with an array of all item IDs
// getSelectors: generates a standard set of selector functions
const userRegisterAdapter = createEntityAdapter<User>();

// Create slice that will manage the state of some type of object
const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState: userRegisterAdapter.getInitialState({
    status: "idle",
  }),
  reducers: {
    addedUser: userRegisterAdapter.addOne,
    homeRedirect(state, action) {
      state.status = "idle";
    },
  },
  // Extra reducers to handle the promise produced by createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(saveUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(saveUser.fulfilled, (state, action) => {
        state.status = "successful";
      })
      .addCase(saveUser.rejected, (state, action) => {
        state.status = "unsuccessful";
      });
  },
});

// With Redux Toolkit we get our reducers wrapped in actions, which simplifies the logic a lot.
// Our React components will use dispatch on these actions to actually perform state management
export const { addedUser, homeRedirect } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;

// In this next section is where we define our selectors, ie how our react components get/derive
// the state they need from Redux. The base method is useSelector, but it has some optimizations
// built on it via Redux Toolkit that we can get from the adapter we declared earlier

// What we've done here is override the built in selectors given by the adapater object
// we can also create custom selectors with createSelector
export const { selectAll: selectUsers, selectById: selectUserById } =
  userRegisterAdapter.getSelectors((state: any) => state.users);

export const saveUser = createAsyncThunk(
  "userRegister/saveUser",
  async (user: User) => {
    return await axios.post(API_URL + "register", {
      id: user.id,
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
      registrationDate: user.registrationDate,
    });
  }
);
