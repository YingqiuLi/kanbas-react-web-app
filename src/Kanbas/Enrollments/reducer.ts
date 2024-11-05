import { createSlice } from '@reduxjs/toolkit';
import * as db from '../Database';

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
  role: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const savedEnrollments = JSON.parse(localStorage.getItem('enrollments') || 'null');

const initialState: EnrollmentsState = {
  enrollments: savedEnrollments || db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.some(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
      );
      if (!exists) {
        // Find the user's role from users.json
        const user = db.users.find((u: User) => u._id === userId);
        const userRole = user ? user.role : 'STUDENT'; // Default to STUDENT if not found

        const newEnrollment: Enrollment = {
          _id: new Date().getTime().toString(),
          user: userId,
          course: courseId,
          role: userRole,
        };
        state.enrollments.push(newEnrollment);
        // Update localStorage
        localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
      }
    },
    unenrollCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
      // Update localStorage
      localStorage.setItem('enrollments', JSON.stringify(state.enrollments));
    },
    refreshEnrollments: (state) => {
      const savedEnrollments = JSON.parse(localStorage.getItem('enrollments') || 'null');
      if (savedEnrollments) {
        state.enrollments = savedEnrollments;
      }
    },
  },
});

export const { enrollCourse, unenrollCourse, refreshEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
