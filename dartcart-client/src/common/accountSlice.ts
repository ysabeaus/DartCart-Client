import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { User } from "../common/types";
import axios from "axios";

const API_URL = "http://localhost:8080/";

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
//     for storing a normalized state of items along with an array of all item IDs
// getSelectors: generates a standard set of selector functions
const accountAdapter = createEntityAdapter<User>();

// Create slice that will manage the state of some type of object
const accountSlice = createSlice({
  name: "accounts",
  initialState: accountAdapter.getInitialState({
    status: "idle",
  }),
  reducers: {
    addedUser: accountAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.status = "idle";
        // Put in post-creation functionality, maybe
        // get state for account and any tokens/headers
      });
  },
});

// With Redux Toolkit we get our reducers wrapped in actions, which simplifies the logic
// a lot. Our React components will use dispatch on these actions to actually perform
// state management
export const { addedUser } = accountSlice.actions;
export default accountSlice.reducer;

// In this next section is where we define our selectors, ie how our react components get/derive
// the state they need from Redux. The base method is useSelector, but it has some optimizations
// built on it via Redux Toolkit that we can get from the adapter we declared earlier

// What we've done here is override the built in selectors given by the adapater object
// we can also create custom selectors with createSelector
export const { selectAll: selectUsers, selectById: selectUserById } =
  accountAdapter.getSelectors((state: any) => state.users);

// Async functionality
export const postUser = createAsyncThunk("accounts/postUser", async (user: User) => {
  console.log(user);

  // return axios.post(API_URL + "register", {
  //     id:
  //     username:
  //     password:
  //     firstName:
  //     lastName:
  //     email:
  //     phone:
  //     location:
  //     registrationDate:
  // })
});
