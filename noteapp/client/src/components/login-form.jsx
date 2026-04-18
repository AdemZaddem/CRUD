import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {NotebookPen} from 'lucide-react'
import { useState } from "react"
import { loginUser } from "@/services/api"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    try {
    e.preventDefault()
    const data = await loginUser(email,password)
    localStorage.setItem('user',JSON.stringify({id:data.user.id,username:data.user.username,email:data.user.email}))
    navigate('/notes')
    setEmail('')
    setPassword('')
    toast.success(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 w-[400px] m-4", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className={'flex justify-center'}><NotebookPen size={48}/></CardTitle>
          <CardTitle className={'text-3xl'}>Welcome Back</CardTitle>
          <CardDescription>
            Sign in to access your notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" value = {email} required onChange = {(e)=> setEmail(e.target.value)} />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input value = {password} onChange = {(e)=>setPassword(e.target.value)} id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to = {'/register'}>Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
