import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json()); 

app.post("/todos", async(req,res)=>{
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/todos" , async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
});

app.put("/todos/:id",async(req,res)=>{
    try {
        const  { id } = req.params;
        const { description } = req.body;
        const updTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description , id]);

        res.json("Table was updated")
    } catch (err) {
        console.error(err.message)
    }
});

app.delete("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const delTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted")
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, ()=>{
    console.log("Server has started on port 5000");
});