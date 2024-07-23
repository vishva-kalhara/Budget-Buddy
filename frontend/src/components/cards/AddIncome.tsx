import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUpSchema, TSignUpSchema } from "@/types/types";


type AddIncomeProps = {
    cardHeader: string;
};

// Install both zod and react-hook-form
// Create schema using zod
// Validate the form using hook forms


const AddIncome = ({ cardHeader }: AddIncomeProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async () => {

        //BackEnd Code 

        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    };

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
                    <Input className="bg-bgSecondary"
                        {...register("Title")}
                    />
                    {errors.Title && (
                        <p className="text-red-600 font-semibold"> {`${errors.Title.message}`} </p>
                    )}

                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Description
                    </label>
                    <Input className="bg-bgSecondary"
                        {...register("Description")}
                    />
                    {errors.Description && (
                        <p className="text-red-600 font-semibold"> {`${errors.Description.message}`} </p>
                    )}

                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Amount
                    </label>
                    <Input className="bg-bgSecondary"
                        {...register("Amount")}
                    />
                    {errors.Amount && (
                        <p className="text-red-600 font-semibold"> {`${errors.Amount.message}`} </p>
                    )}

                </div>

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full text-primary mt-4 bg-[#1c9b5f]">
                    Add Income
                </Button>

                <Button
                    onClick={handleViewAllExpenses}
                    className="w-full text-primary bg-[#456d5a]">
                    View All Expenses
                </Button>

            </div>
        </form>
    );
};

export default AddIncome;
