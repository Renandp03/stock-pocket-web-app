import axios from 'axios'
import { useForm, type SubmitHandler } from 'react-hook-form'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Inputs = {
    email: string,
    password: string,
}

function LoginPage(){

    const {register, handleSubmit} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await handleLogin(data)
        if(response) {
            console.log(response)
        }
    }

    async function handleLogin({email, password}: Inputs) {
        try {
            if(!email || !password) {
                throw new Error('Email and password are required')
            }
            const {data} = await axios.post('/login', {email, password})
            return data
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="flex items-center justify-center h-[calc(100vh-72px)]">
            <section className="flex flex-col items-center justify-center gap-4 w-full h-full">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                        Enter your email below to login to your account
                        </CardDescription>
                        <CardAction>
                        <Button variant="link">Sign Up</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register('email')}
                            />
                            </div>
                            <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required {...register('password')} />
                            </div>
                        </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full" onClick={handleSubmit(onSubmit)}>
                        Login
                        </Button>
                        <Button variant="outline" className="w-full">
                        Login with Google
                        </Button>
                    </CardFooter>
                </Card>
                
            </section>
            <section className="flex flex-col items-center justify-center gap-4 bg-[url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg)] w-full h-full bg-cover bg-center opacity-70">

            </section>
        </main>
    )
}

export default LoginPage