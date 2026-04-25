import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExpensesList from "@/components/ExpensesList";
import AddExpense from "@/components/AddExpense";

function Expenses() {
  const [isAdd, setIsAdd] = useState(true);
  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h1 className="text-3xl">Expenses</h1>
          <p className="text-gray-400">Manage all your transactions</p>
        </div>
        <Button size="lg" onClick={() => setIsAdd(!isAdd)}>
          <Plus />
          <p>Add Expense</p>
        </Button>
      </header>
      {isAdd && <AddExpense />}
      <div className="flex flex-col gap-2 items-center lg:flex-row justify-between">
        <div className="relative w-full flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <Input placeholder="Search notes..." className="pl-9 py-5" />
        </div>

        <Select>
          <SelectTrigger className="w-full lg:w-[200px]">
            <Filter size={16} className="text-gray-400" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Food & Dining">Food & Dining</SelectItem>
              <SelectItem value="Transportation">Transportation</SelectItem>
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

      <ExpensesList />
    </div>
  );
}

export default Expenses;
