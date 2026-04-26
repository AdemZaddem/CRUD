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
import { Lock, Save } from "lucide-react";

function ChangePassword() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Update your password to keep your account secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="currPassword">
                <Lock size={18} />
                Current Password
              </Label>
              <Input id="currPassword" type="password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newPassword">
                <Lock size={18} />
                New Password
              </Label>
              <Input id="newPassword" type="password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">
                <Lock size={18} />
                Confirm New Password
              </Label>
              <Input id="confirmPassword" type="password" required />
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

export default ChangePassword;
