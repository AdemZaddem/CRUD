import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { NotebookPen } from "lucide-react"
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
import { registerUser } from "@/services/api"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"
import {useState } from "react"

export function SignupForm({
  ...props
}) {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [verifyPassword,setVerifyPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    try {
      e.preventDefault()
      if(password !== verifyPassword) throw Error('Password dont match')
      await registerUser(username,email,password)
      setEmail('')
      setUsername('')
      setPassword('')
      setVerifyPassword('')
      toast.success('Account created successfuly')
      navigate('/login')
    } catch (error) {
      toast.error(error.message)
    }
    

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
    <Card {...props} className={'w-[400px]'}>
      <CardHeader>
          <CardTitle className={'flex justify-center'}><NotebookPen size={48}/></CardTitle>
          <CardTitle className={'text-3xl'}>Create Account</CardTitle>
          <CardDescription>
            Sign up to start taking notes
          </CardDescription>
        </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input value = {username} onChange = {(e)=>setUsername(e.target.value)} id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input value = {email} onChange = {(e)=>setEmail(e.target.value)} id="email" type="email" placeholder="m@example.com" required />
              
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input value = {password} onChange = {(e)=>setPassword(e.target.value)} id="password" type="password" required />
              
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input value = {verifyPassword} onChange = {(e)=>setVerifyPassword(e.target.value)} id="confirm-password" type="password" required />
              
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to={'/login'}>Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}
