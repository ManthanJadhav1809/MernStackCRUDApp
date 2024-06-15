import express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controller/userController.js";


const route=express.Router();

// route for crete data
route.post("/create",create);

// route for getAll Data;
route.get("/getall",getAll);

// route for get one data
route.get("/getone/:id",getOne);

// Route for update data
route.put("/update/:id",update);

// route for delete
route.delete("/delete/:id",deleteUser);

export default route;