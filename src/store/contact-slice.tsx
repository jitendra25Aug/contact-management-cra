import { createSlice, nanoid } from "@reduxjs/toolkit";

type userInfoType = {
    firstName: string,
    lastName: string,
    status: string,
    id: string,
}
export type contactStateType = {
    userInfo: userInfoType,
    users: Array<userInfoType>
}
const initialState: contactStateType = { userInfo: { firstName: '', lastName: '', status: 'active', id: '' }, users: [] };

const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {
        handleInputData(state, action) {
            const { name, value } = action.payload;
            state.userInfo[name as keyof userInfoType] = value;
        },
        addContact(state) {
            const currentUserIndex: number = state.users.findIndex((user) => user.id === state.userInfo.id);
            if (currentUserIndex !== -1) {
                const currentUser = {...state.userInfo}
                state.users[currentUserIndex] = currentUser;
            } else {
                const id = nanoid();
                const newUser = { ...state.userInfo, id: id };
                state.users.push(newUser);
            }
        },
        editContact(state, action) {
            const currentUser: any = state.users.find((user) => user.id === action.payload);
            state.userInfo.firstName = currentUser.firstName;
            state.userInfo.lastName = currentUser.lastName;
            state.userInfo.status = currentUser.status;
            state.userInfo.id = currentUser.id;
        },
        deleteContact(state, action){
            const userIndex: number = state.users.findIndex((user) => user.id === action.payload);
            state.users.splice(userIndex, 1);
        },
        clearContactData(state) {
            state.userInfo.firstName = '';
            state.userInfo.lastName = '';
            state.userInfo.status = 'active';
            state.userInfo.id = '';
        }
    },
});

export const contactSliceActions = contactSlice.actions;
export default contactSlice;