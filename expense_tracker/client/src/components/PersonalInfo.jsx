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
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { User, Save, Mail } from "lucide-react";

function PersonalInfo() {
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Update your personal details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">
                <User size={18} />
                Full Name
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Adem Zaddem"
                value = {user.username}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">
                <Mail size={18} />
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@exemple.com"
                value = {user.email}
              />
            </div>
            <div>
              <Button>
                <Save />
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default PersonalInfo;
