import express, { Request, Response } from 'express';

type Handler = (
  req: Request,
  res: Response,
) => Response;

// Controller handler is defined
export const calculateFibonacci = (num: number): number => {
  // By default it is defined the first two series
  let series: number[] = [0, 1];

  // In this iteration it's calculation the fibonacci series
  for (let i = 2; i <= num; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }

  return series[num];
}

const fibonacciHandler: Handler = (req, res) => {
  const { params } = req;

  // This validation is to be sure that a valid number was sent
  if (!params?.num || isNaN(Number(params.num))) {
    return res.status(500).json({ error: 'Invalid params'});
  }

  return res.send({ result: calculateFibonacci(Number(params.num)) });
};

// Controller function is exported
export default fibonacciHandler;