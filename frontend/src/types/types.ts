import { z } from "zod";

export const signUpSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .min(5, "Title must have at least 5 characters"),
    description: z
        .string()
        .min(1, "Description is required")
        .min(10, "Description must have at least 10 characters"),

    amount: z
        .string()
        .min(1, "Amount is required")
        .refine((val) => /^\d+$/.test(val), "Amount must be a number"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
