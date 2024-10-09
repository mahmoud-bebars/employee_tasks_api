import { Response } from "express";

export const handleError = (error: unknown, res: Response) => {
  // Handle error as unknown
  if (error instanceof Error) {
    console.log(error.message);
    return res.status(400).json({
      code: 400,
      message: error.message,
    });
  }
  return res.status(400).json({
    code: 400,
    message: "An unknown error occurred",
  });
};
