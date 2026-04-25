import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { deleteExpense } from "@/services/api";
import { toast } from "sonner";
import { useExpenses } from "@/context/ExpensesContext";
import { Button } from "./ui/button";

function ExpensesItem({ id, title, amount, category, date }) {
  const { expenses, setExpenses } = useExpenses();

  async function handleDelete(id) {
    await deleteExpense(id);
    setExpenses(expenses.filter((note) => note.id !== id));
    toast.success("Expense deleted");
  }
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left - title, category, amount & date on mobile */}
        <div className="flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-sm text-gray-400 mb-5 lg:mb-0 md:mb-0">
            {category}
          </span>
          {/* Mobile only */}
          <div className="flex flex-col mt-1 md:hidden">
            <span className="font-semibold">${amount}</span>
            <span className="text-sm text-gray-400">{formatDate(date)}</span>
          </div>
        </div>

        {/* Amount - md+ only */}
        <div className="hidden md:flex flex-col">
          <span className="text-sm text-gray-400">Amount</span>
          <span className="font-semibold">${amount}</span>
        </div>

        {/* Date - lg+ only */}
        <div className="hidden lg:flex flex-col">
          <span className="text-sm text-gray-400">Date</span>
          <span className="font-semibold">{formatDate(date)}</span>
        </div>

        {/* Delete */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className={'flex items-center flex-col'}>
              <CardAction>
                <Trash2
                  color="#ff0000"
                  size={20}
                  className="cursor-pointer flex-shrink-0"
                />
              </CardAction>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Expense</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this expense? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(id)} className={'bg-red-500 hover:bg-red-500/80'}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
}

export default ExpensesItem;
