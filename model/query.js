const getAllstudents = "SELECT * FROM student ORDER BY id ASC";
const getStudentById = "SELECT * FROM student WHERE id=$1";
const insertStudent = "INSERT INTO student (id,name,age,course) VALUES ($1,$2,$3,$4);"
const editStudentById = "UPDATE student SET name = $1 WHERE id = $2";
const deleteStudentById = "DELETE FROM student WHERE id = $1";
export {getAllstudents,getStudentById,insertStudent,editStudentById,deleteStudentById}