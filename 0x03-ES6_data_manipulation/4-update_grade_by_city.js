export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the new grade for the student
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      
      // Create a new student object with the updated grade or 'N/A' if no grade is found
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
