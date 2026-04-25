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
import { useIncome } from "@/context/IncomeContext";
import { createIncome } from "@/services/api";
import { useState } from "react";

function AddIncome({ isAdd, setIsAdd }) {
  const { setIncomes } = useIncome();
  const [source, setSource] = useState("");
  const [selectKey, setSelectKey] = useState(0);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await createIncome(user.id, {
        title,
        amount: parseInt(amount),
        source,
        date,
      });
      toast.success("Income Added");
      setAmount("");
      setTitle("");
      setDate("");
      setSource("");
      setIncomes((prev) => [...prev, res]);
      setSelectKey((prev) => prev + 1);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Income</CardTitle>
        <CardDescription>Enter the details of your income</CardDescription>
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
                value={amount}
              />
            </div>
            <div className="grid gap-2">
              <Label>Source</Label>
              <Select
                key={selectKey}
                onValueChange={(value) => setSource(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Salary">Salary</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Investements">Investements</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Rental Income">Rental Income</SelectItem>
                    <SelectItem value="Gifts">Gifts</SelectItem>
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
                value={date}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Input
                type="text"
                placeholder="What was this for?"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button type="submit">Add Income</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAdd(!isAdd)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
export default AddIncome;
