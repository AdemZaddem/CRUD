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
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import IncomeList from "@/components/IncomeList";
import {useIncome } from "@/context/IncomeContext";
import { getIncomes } from "@/services/api";
import AddIncome from "@/components/AddIncome";

function Income() {
  const { incomes, setIncomes } = useIncome();
  const [isAdd, setIsAdd] = useState(false);
  const [filter, setFilter] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const total = incomes.reduce((acc, curr) => acc + curr.amount, 0)
  
  const user = JSON.parse(localStorage.getItem("user"));

  const filteredIncomes = incomes.filter((income) =>
    income.title.toLowerCase().includes(searchVal.toLowerCase()),
  );
  
  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h1 className="text-3xl font-semibold">Income & Budget</h1>
          <p className="text-gray-400">Track all your income sources</p>
        </div>
        <Button size="lg" onClick={() => setIsAdd(!isAdd)}>
          <Plus />
          <p>Add Income</p>
        </Button>
      </header>
      {isAdd && <AddIncome setIsAdd = {setIsAdd} isAdd = {isAdd} />}
      <div className="flex flex-col gap-2 items-center lg:flex-row justify-between">
        <div className="relative w-full flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <Input placeholder="Search income..." className="pl-9 py-5" value = {searchVal} onChange = {(e)=>setSearchVal(e.target.value)}/>
        </div>
        <Select
          onValueChange={async (value) => {
            setFilter(value);
            try {
              const res = await getIncomes(user.id, value); // ← use value directly, not filter state
              setIncomes(res);
            } catch (error) {
              toast.error(error.message);
            }
          }}
        >
          <SelectTrigger className="w-full lg:w-[200px]">
            <Filter size={16} className="text-gray-400" />
            <SelectValue placeholder="All Categories" />
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
      <Card className="bg-gray-100 border-0 shadow-none">
        <CardContent className="p-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">Total Income</p>
              <p className="text-2xl font-bold">${total}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Entries</p>
              <p className="text-2xl font-bold">{incomes.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <IncomeList incomes = {filteredIncomes} />
    </div>
  );
}

export default Income;
