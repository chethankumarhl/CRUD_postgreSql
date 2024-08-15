import express from 'express';
const router = express.Router();
import { getStudents,getStudentsById,createStudent,editStudent,deleteStudent } from "../controller/user.js";
router.get('/',getStudents)
router.get('/:id',getStudentsById)
router.post('/',createStudent)
router.put('/:id',editStudent)
router.delete('/:id',deleteStudent)
export {router}