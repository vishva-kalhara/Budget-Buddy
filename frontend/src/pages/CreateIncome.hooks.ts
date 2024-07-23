import { signUpSchema, TSignUpSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

export const useCreateIncome = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            title: "Monthly Salary",
            description: "September Salary",
            amount: "456789",
        },
    });

    const onSubmit: SubmitHandler<TSignUpSchema> = async ({
        title,
        description,
        amount,
    }) => {
        try {
            const response = await axios({
                method: "POST",
                url: "http://127.0.0.1:3001/api/v1/incomes/",
                data: {
                    title,
                    description,
                    amount,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log("Hello");
            console.log(error);
        }
    };

    return { onSubmit, register, handleSubmit, errors, isSubmitting };
};
