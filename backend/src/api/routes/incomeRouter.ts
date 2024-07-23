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

/*
 *
 * [GET] / --> Get All data
 * [POST] / --> Create a new record
 * [GET] /:id --> Get one record
 * [PATCH] /:id --> update one record
 * [DELETE] /:id --> delete one record
 *
 */

export default incomeRouter;
