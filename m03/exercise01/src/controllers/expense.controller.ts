import { NextFunction, Request, Response } from "express";
import axios from 'axios';
import { MOCK_API_URL } from "../config";

async function GetExpenseList(req: Request, res: Response, next: NextFunction) {
    try {
        let url = `${MOCK_API_URL}`;
        const { category } = req.query;

        if (category) {
            url += `?category=${category}`;
        }

        const response = await axios.get(url);
        res.status(200).send({
            message: 'Get expense list successfully',
            expenses: response.data,
        })
    } catch (error) {
        next(error);
    }
}

// async function GetExpenseList(req: Request, res: Response, next: NextFunction) {
//     try {
//         // const { category } = req.query;
//         // const url = `${MOCK_API_URL}/${category ? `?=category=${category}` : ''}}`;
//         const response = await axios.get(`${MOCK_API_URL}`);
//         res.status(200).send({
//             message: 'Get expense list successfully',
//             expenses: response.data,
//         })
//     } catch (error) {
//         next(error);
//     }
// }

async function GetExpenseDetail(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const response = await axios.get(`${MOCK_API_URL}/${id}`);
        res.status(200).send({
            message: 'Get expense detail successfully',
            expense: response.data,
        })
    } catch (error) {
        next(error);
    }
}

async function CreateExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await axios.post(`${MOCK_API_URL}`, req.body);
        res.status(201).send({
            message: 'Create expense successfully',
            expense: response.data,
        })
    } catch (error) {
        next(error);
    }
}

async function UpdateExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const response = await axios.put(`${MOCK_API_URL}/${id}`, req.body);
        res.status(200).send({
            message: 'Update expense successfully',
            expense: response.data,
        })
    } catch (error) {
        next(error);
    }
}

async function DeleteExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        await axios.delete(`${MOCK_API_URL}/${id}`);
        res.status(204).send({ message: 'Delete expense successfully' })
    } catch (error) {
        next(error);
    }
}

export { GetExpenseList, CreateExpense, UpdateExpense, DeleteExpense, GetExpenseDetail }