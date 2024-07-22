import { Button } from "../ui/button";
import { Input } from "../ui/input";

type AddIncomeProps = {
    cardHeader: string;
};

// Install both zod and react-hook-form
// Create schema using zod
// Validate the form using hook forms

const AddIncome = ({ cardHeader }: AddIncomeProps) => {
    return (
        <form action="">
            <div className="max-w-[340px] w-[340px] flex flex-col bg-bgSecondary box-border p-6 mx-auto mt-10 rounded-lg gap-4">
                <h1 className="text-primary text-center text-lg font-semibold">
                    {cardHeader}
                </h1>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Title
                    </label>
                    <Input className="bg-bgSecondary" />
                    {/* <label className="text-red-500 font-semibold text-sm ">
                    Title cannot be empty!
                </label> */}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Description
                    </label>
                    <Input className="bg-bgSecondary" placeholder="" />
                    {/* <label className="text-red-500 font-semibold text-sm ">
                    Title cannot be empty!
                </label> */}
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-primary font-semibold text-sm ">
                        Amount
                    </label>
                    <Input className="bg-bgSecondary" />
                    {/* <label className="text-red-500 font-semibold text-sm ">
                    Title cannot be empty!
                </label> */}
                </div>
                <Button className="w-full text-primary bg-[#188853]">
                    Add Income
                </Button>
            </div>
        </form>
    );
};

export default AddIncome;
