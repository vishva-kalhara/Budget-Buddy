import Header from "@/components/Header";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Expenses = () => {

    const navigate = useNavigate(); // Navigate to the Add expense page

    const handleViewAddExpenses = () => {
        navigate("/create-income"); // Navigate to the Add expense page
    };

    return (
        <>
            <section className="box-border p-5 flex bg-background h-screen flex-col">
                <Header />

                <div className="text-center mt-14">
                    <h1 className="text-2xl text-white">All Expenses</h1>
                </div>

                <Button
                    onClick={handleViewAddExpenses}
                    className="ml-auto mr-8 text-primary mb-10 mt-6 bg-[#4d4c4cb2]">
                    <b className="text-2xl pr-2 pb-1">+</b> Add
                </Button>

                <div className="object-center ml-28 mr-28">
                    <Table className="text-md">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell>Food</TableCell>
                                <TableCell>2024-07-22</TableCell>
                                <TableCell>11.40</TableCell>
                                <TableCell>500</TableCell>
                                <TableCell>
                                    <Button variant="link">Edit</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell>Food</TableCell>
                                <TableCell>2024-07-22</TableCell>
                                <TableCell>11.40</TableCell>
                                <TableCell>500</TableCell>
                                <TableCell>
                                    <Button variant="link">Edit</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>


            </section>


        </>
    );
};

export default Expenses