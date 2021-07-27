"use strict";
import { Request, Response } from "express";

/**
 * List of API examples.
 * @route GET /api
 */
export const getApi = async (req: Request, res: Response) => {
  console.log(`GET /api`);
  return res.status(200).send('hello world');
};
