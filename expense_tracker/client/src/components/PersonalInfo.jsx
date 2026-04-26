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
import { User, Save, Mail } from "lucide-react";
import { updateProfile } from "@/services/api";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

function PersonalInfo() {
    const {logedInUser,setLogedInUser} = useAuth()
    const user = JSON.parse(localStorage.getItem('user'))
    const [username,setUsername] = useState(user.username)
    const [email,setEmail] = useState(user.email)

    

    async function handleSave(e){
        try {
            e.preventDefault()
            const res = await updateProfile(user.id,{username,email})
            const updated = {...user,username,email}
            setLogedInUser(updated)
            localStorage.setItem('user',JSON.stringify(updated))
            console.log(res);
            
            toast.success('Profile updated')
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Update your personal details</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave}>
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
                value = {username}
                required
                onChange = {(e)=>setUsername(e.target.value)}
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
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
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
