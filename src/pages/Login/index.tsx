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
            // const {data} = await axios.post('/login', {email, password})
            return {}
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="min-h-screen flex">
            <section className="w-full lg:w-1/2 bg-white flex items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-semibold mb-6">Bem vindo ao Stock Pocket!</h1>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Login da plataforma</CardTitle>
                            <CardDescription>
                                Entre com sua conta fornecida
                            </CardDescription>
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
                                    <Label htmlFor="password">Senha</Label>
                                    <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                                <Input id="password" type="password" required {...register('password')} />
                                </div>
                            </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full cursor-pointer" onClick={handleSubmit(onSubmit)}>
                                Entrar
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login com Google
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section
                className="
                hidden lg:flex
                w-1/2
                relative
                bg-cover bg-center
                "
                style={{
                backgroundImage: `url('https://pixabay.com/pt/images/download/restaurant-4011989_1920.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60 " />

                <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

                <div className="relative z-10 p-12 text-white flex items-end">
                <p className="text-sm opacity-80">
                    © 2025 Sua aplicação
                </p>
                </div>
            </section>
        </main>
    )
}

export default LoginPage