import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    // alert(`${ASSIGNMENT_API}/${assignment._id}`);
    return data;
};
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
      `${ASSIGNMENT_API}/${courseId}`,
      assignment
    );
    return response.data;
};