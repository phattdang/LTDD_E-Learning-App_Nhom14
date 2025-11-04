export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  address: string;
  desc: string;
  courseId: number[];
  cartCourseIds: number[];
}
