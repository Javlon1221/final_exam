import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Student {
  id: string;
  full_name: string;
  profession: string;
  address: string;
  gender: string;
}

// const loadFromLocalStorage = (): Student[] => {
//   try {
//     const data = localStorage.getItem("savedStudents");
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.error("Error loading from localStorage", error);
//     return [];
//   }
// };

// const saveToLocalStorage = (items: Student[]) => {
//   try {
//     localStorage.setItem("savedStudents", JSON.stringify(items));
//   } catch (error) {
//     console.error("Error saving to localStorage", error);
//   }
// };

interface SavedState {
  items: Student[];
}
const savedItems = localStorage.getItem("saved");
const initialState: SavedState = {
  items: savedItems ? JSON.parse(savedItems) : []
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addSaved: (state, action: PayloadAction<Student>) => {
        state.items.push(action.payload);
    },
    allRemoveSaved: (state) => {
      state.items = [];
    },
  },
});

export const { addSaved, allRemoveSaved } = savedSlice.actions;
export default savedSlice.reducer;
