export default interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  courseId: number;
  description: string;
  thumbnail: string;
  order: number;
  isFree: boolean;
}
