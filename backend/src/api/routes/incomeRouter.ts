import { Router } from 'express';
import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getOneIncome,
  updateIncome,
} from '../handlers/incomeHandler';

const incomeRouter = Router();

incomeRouter.route('/').get(getAllIncomes).post(createIncome);
incomeRouter
  .route('/:id')
  .get(getOneIncome)
  .patch(updateIncome)
  .delete(deleteIncome);

export default incomeRouter;
