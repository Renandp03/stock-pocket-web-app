import axios from 'axios'

export async function handleLogin({email, password}: {email: string, password: string}) {
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