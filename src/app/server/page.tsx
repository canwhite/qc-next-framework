async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
        message: 'Hello, Next!',
    }
}
  
export default async function Home() {
    const { message } = await getData()
    return <h1>{message}</h1>
}
  
