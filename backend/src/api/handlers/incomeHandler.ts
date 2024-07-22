import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { incomeType } from '../types/incomeTypes';
import AppError from '../../utils/appError';
import { randomBytes } from 'crypto';

let incomeRecords: incomeType[] = [
  {
    id: '5f3a2b1c-7a9b-4d0a-bc57-82ed489837a4',
    title: 'Salary',
    description: 'Monthly salary from full-time job',
    amount: 5000,
  },
  {
    id: '9d7e5c2b-2a7f-4e1d-9baf-4f29a1824c7a',
    title: 'Freelance Work',
    description: 'Income from freelance web development projects',
    amount: 1200,
  },
  {
    id: '7c9b1e2d-5a3f-4b8e-8e6b-7e4d9f3a8b6c',
    title: 'Investments',
    description: 'Dividends from stock market investments',
    amount: 300,
  },
  {
    id: '3e7d4f2a-8b6c-4e5a-9f7d-2a3b1c7f5d8e',
    title: 'Rental Income',
    description: 'Monthly rent from rental property',
    amount: 1500,
  },
  {
    id: '2a9b7e4d-3c6a-4f8e-9d7b-5e6c3b1a8f2d',
    title: 'Consulting',
    description: 'Income from consulting services',
    amount: 800,
  },
  {
    id: '4b8e7d2c-5a9b-4c6f-8e7d-3a1b2f5d9e4c',
    title: 'Side Business',
    description: 'Profit from side business',
    amount: 1000,
  },
  {
    id: '6e5a2b4c-7d8e-4a9b-3f6d-2c1b8f7e9a3d',
    title: 'Royalties',
    description: 'Royalties from book sales',
    amount: 250,
  },
  {
    id: '8f2a7d5c-9b3e-4c1a-6e4d-5a3b9e7f2d8c',
    title: 'Gift',
    description: 'Monetary gift received',
    amount: 500,
  },
  {
    id: '1c5d7e9b-3a2b-4f8e-6d9c-7b4a8f2e5d6c',
    title: 'Bonus',
    description: 'Year-end bonus from employer',
    amount: 2000,
  },
  {
    id: '9b2a4d5c-6e8e-4f7d-3c1b-2a9f8e7d4b3c',
    title: 'Interest',
    description: 'Interest earned from savings account',
    amount: 100,
  },
];

export const getAllIncomes = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(200).json({
    status: 'success',
    count: incomeRecords.length,
    data: incomeRecords,
  });
};

export const getOneIncome = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const records = incomeRecords.filter((item) => item.id === req.params.id);
    if (records.length == 0)
      return next(new AppError('There is no record associated!', 404));

    res.status(200).json({
      status: 'success',
      data: records[0],
    });
  }
);

export const createIncome = catchAsync(
  async (
    { body: { title, description, amount } }: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!title || !description || !amount)
      return next(
        new AppError('Please provide title, description and amount!', 400)
      );

    const newRecord = {
      id: randomBytes(16).toString('hex'),
      title,
      description,
      amount,
    };

    incomeRecords.push(newRecord);

    res.status(201).json({
      status: 'success',
      data: newRecord,
    });
  }
);

export const updateIncome = catchAsync(
  async (
    { body: { title, description, amount }, params: { id } }: Request,
    res: Response,
    next: NextFunction
  ) => {
    const records = incomeRecords.filter((item) => {
      if (item.id === id) {
        item.title = title ? title : item.title;
        item.description = description ? description : item.description;
        item.amount = amount ? amount : item.amount;
        console.log(item);
        return item;
      }
    });
    if (records.length == 0)
      return next(new AppError('There is no record associated!', 404));

    res.status(200).json({
      status: 'success',
      data: records[0],
    });
  }
);

export const deleteIncome = catchAsync(
  async ({ params: { id } }: Request, res: Response, next: NextFunction) => {
    const records = incomeRecords.filter((item) => item.id === id);
    if (records.length == 0)
      return next(new AppError('There is no record associated!', 404));

    incomeRecords = incomeRecords.filter((income) => income.id !== id);

    res.status(204).json({
      status: 'success',
    });
  }
);
