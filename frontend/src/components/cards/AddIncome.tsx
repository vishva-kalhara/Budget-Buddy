/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useCreateIncome } from "@/pages/CreateIncome.hooks";

type AddIncomeProps = {
    cardHeader: string;
};

const AddIncome = ({ cardHeader }: AddIncomeProps) => {
    const { onSubmit, register, handleSubmit, errors, isSubmitting } =
        useCreateIncome();

    const navigate = useNavigate(); // Navigate to the expenses page

    const handleViewAllExpenses = () => {
        navigate("/all-expenses"); // Navigate to the expenses page
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-[340px] w-[340px] flex flex-col bg-bgSecondary box-border p-6 mx-auto mt-10 rounded-lg gap-4">
                <h1 className="text-primary text-center text-lg font-semibold">
                    {cardHeader}
                </h1>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Title
                    </label>
                    <Input
                        data-testid="txtBoxTitle"
                        className="bg-bgSecondary"
                        {...register("title")}
                    />
                    {errors.title && (
                        <p
                            data-testid="lblErrorTitle"
                            className="text-red-600 font-semibold"
                        >
                            {" "}
                            {`${errors.title.message}`}{" "}
                        </p>
                    )}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Description
                    </label>
                    <Input
                        className="bg-bgSecondary"
                        {...register("description")}
                    />
                    {errors.description && (
                        <p className="text-red-600 font-semibold">
                            {" "}
                            {`${errors.description.message}`}{" "}
                        </p>
                    )}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Amount
                    </label>
                    <Input className="bg-bgSecondary" {...register("amount")} />
                    {errors.amount && (
                        <p className="text-red-600 font-semibold">
                            {" "}
                            {`${errors.amount.message}`}{" "}
                        </p>
                    )}
                </div>

                <Button
                    data-testid="btnSubmit"
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full text-primary mt-4 bg-[#1c9b5f]"
                >
                    Add Income
                </Button>

                <Button
                    onClick={handleViewAllExpenses}
                    className="w-full text-primary bg-[#456d5a]"
                >
                    View All Expenses
                </Button>
            </div>
        </form>
    );
};

export default AddIncome;
