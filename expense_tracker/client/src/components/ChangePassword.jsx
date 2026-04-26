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
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Lock, Save } from "lucide-react";
import { updatePassword } from "@/services/api";
import { toast } from "sonner";

function ChangePassword() {
    const user = JSON.parse(localStorage.getItem('user'))
    const [currPassword,setCurrPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    async function handleSave(e){
        try {
            e.preventDefault()
            if(newPassword !== confirmPassword)throw Error('Password doesnt match')
            const res = await updatePassword(user.id,{currPassword,newPassword,email:user.email})
            setConfirmPassword('')
            setNewPassword('')
            setCurrPassword('')
            toast.success('Password Updated')
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Update your password to keep your account secure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="currPassword">
                <Lock size={18} />
                Current Password
              </Label>
              <Input id="currPassword" type="password" required value = {currPassword} onChange={(e)=>setCurrPassword(e.target.value)}/>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newPassword">
                <Lock size={18} />
                New Password
              </Label>
              <Input id="newPassword" type="password" required value = {newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">
                <Lock size={18} />
                Confirm New Password
              </Label>
              <Input id="confirmPassword" type="password" required value = {confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
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
