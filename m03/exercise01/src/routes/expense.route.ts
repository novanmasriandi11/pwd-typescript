import { Router } from "express";
import { CreateExpense, DeleteExpense, GetExpenseDetail, GetExpenseList, UpdateExpense } from "../controllers/expense.controller";

const router = Router();

router.get("/", GetExpenseList);
router.get("/:id", GetExpenseDetail);
router.post("/create", CreateExpense);
router.put("/:id", UpdateExpense);
router.delete("/:id", DeleteExpense);

export default router;