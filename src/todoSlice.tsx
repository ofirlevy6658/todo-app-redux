import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface Item {
	header: string;
	desc: string;
}

const todosSlice = createSlice({
	name: "todos",
	initialState: [] as Item[],
	reducers: {
		addToDo: (state, { payload }: PayloadAction<Item>) => {
			state.push(payload);
		},
		removeToDo: (state, { payload }: PayloadAction<{ header: string }>) => {
			const removeItem = state.findIndex((el) => el.header === payload.header);
			if (removeItem !== 1) state.splice(removeItem, 1);
		},
	},
});
export const { addToDo, removeToDo } = todosSlice.actions;

export const store = configureStore({
	reducer: {
		todos: todosSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
