// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  day: '',
  month: '',
  year: '',
  age: { years: '--', months: '--', days: '--' },
  errors: { day: '', month: '', year: '' },
  buttonClicked: false,
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    setDay: (state, action) => { state.day = action.payload; },
    setMonth: (state, action) => { state.month = action.payload; },
    setYear: (state, action) => { state.year = action.payload; },
    setErrors: (state, action) => { state.errors = action.payload; },
    setAge: (state, action) => { state.age = action.payload; },
    setButtonClicked: (state, action) => { state.buttonClicked = action.payload; },
  },
});

export const { setDay, setMonth, setYear, setErrors, setAge, setButtonClicked } = ageSlice.actions;
export default ageSlice.reducer;
