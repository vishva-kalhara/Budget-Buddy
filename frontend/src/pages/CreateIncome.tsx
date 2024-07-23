import AddIncome from "@/components/cards/AddIncome";
import Header from "@/components/Header";

const CreateIncome = () => {
    return (
        <section className="box-border p-5 flex bg-background h-screen flex-col">
            <Header />
            <AddIncome cardHeader="Add Expense" />
        </section>
    );
};

export default CreateIncome;
