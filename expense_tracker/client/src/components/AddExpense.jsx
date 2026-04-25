import React, { useState } from "react";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { createExpenses } from "@/services/api";
import { useExpenses } from "@/context/ExpensesContext";

function AddExpense() {
  const { setExpenses } = useExpenses();
  const [category, setCategory] = useState("");
  const [selectKey, setSelectKey] = useState(0)
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log({amount: parseFloat(amount), description, category, date})
      const res = await createExpenses(user.id, {
        amount:parseInt(amount),
        title:description,
        category,
        date,
      });
      toast.success("Expense Added");
      setAmount('');
      setDescription("");
      setDate("");
      setCategory("");
      setExpenses((prev) => [...prev, res]);
      setSelectKey(prev => prev + 1)
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Expense</CardTitle>
        <CardDescription>Enter the details of your expense</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Amount ($)</Label>
              <Input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) => setAmount(e.target.value)}
                value = {amount}
              />
            </div>
            <div className="grid gap-2">
              <Label>Category</Label>
              <Select key={selectKey} onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Bills & Utilities">
                      Bills & Utilities
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Date</Label>
              <Input
                type="date"
                required
                onChange={(e) => setDate(e.target.value)}
                value = {date}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Input
                type="text"
                placeholder="What was this for?"
                onChange={(e) => setDescription(e.target.value)}
                value = {description}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button type="submit">Add Expense</Button>
            <Button type="button" variant="outline">Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddExpense;
