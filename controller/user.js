import { db } from '../db.js';
import { getAllstudents,getStudentById,insertStudent,editStudentById,deleteStudentById } from '../model/query.js';
await db.connect();

const getStudents = async (req,res)=>{
    try {
       const result = await db.query(getAllstudents);
       res.status(200).json(result.rows);
    } catch (error) {
        console.log("cant fetch data",error)
        res.json({message:"error"})
    }
}

const getStudentsById = async (req,res)=>{
    const id = parseInt(req.params.id);
    try {
       const result = await db.query(getStudentById,[id]);
      res.status(200).json(result.rows)
    } catch (error) {
        console.log("cant fetch data",error)
        res.json({message:"error"})
    }
}
const createStudent = async (req,res)=>{
    const {id, name,age,course} = req.body;
    try {
        await db.query(insertStudent,[id,name,age,course]);
        res.status(200).send("query succes")
    } catch (error) {
        console.log(error);
        res.json({message:"error"})
    }
}

const editStudent = async (req,res)=>{
    const id = parseInt(req.params.id);
    const name = req.body.name;
    try {
       await db.query(editStudentById,[name,id]);
        res.status(200).json("edit done...");
       
    } catch (error) {
        console.log("cant fetch data",error)
        res.json({message:"error"})
    }
} 

const deleteStudent = async (req,res)=>{
    const id = parseInt(req.params.id);
    try {
       const result = await db.query(deleteStudentById,[id]);
        res.status(200).json("Delete done...");
    } catch (error) {
        console.log("cant fetch data",error)
        res.json({message:"error"})
    }
} 
export{getStudents,getStudentsById,createStudent,editStudent,deleteStudent}