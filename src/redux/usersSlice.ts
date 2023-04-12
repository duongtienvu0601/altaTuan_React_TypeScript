import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from "firebase/compat/app";
import { setUsers } from './users';

interface User {
  id: string;
  Name: string;
}

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const db = firebase.firestore();
  const sinhVienRef = db.collection("SinhVien");
  const querySnapshot = await sinhVienRef.get();
  const data = querySnapshot.docs.map((doc) => doc.data() as User);
  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users= action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default usersSlice.reducer;

export const selectAllUsers = (state: { users: UsersState }) => state.users.users;
export const selectUserById = (state: { users: UsersState }, userId: string) =>
  state.users.users.find(user => user.id === userId);
export const selectUsersStatus = (state: { users: UsersState }) => state.users.status;
export const selectUsersError = (state: { users: UsersState }) => state.users.error;

export const addUser = async (user: User) => {
  const db = firebase.firestore();
  const sinhVienRef = db.collection("SinhVien");
  await sinhVienRef.add(user);
};


