import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  people: [],
};
const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        setPeople: (state, action) => {
            state.people = action.payload;
        },
        addPerson: (state, { payload: person }) => {
            state.people = [...state.people, person] as any;
        },
        deletePerson: (state, { payload: { personId, courseId } }) => {
            state.people = state.people.filter(
              (p: any) => p._id !== personId || p.course !== courseId
            );
        },
    },
});
export const { addPerson, deletePerson, setPeople } = peopleSlice.actions;   
export default peopleSlice.reducer;