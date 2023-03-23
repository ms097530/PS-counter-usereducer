import Counter from "../components/Counter"

export default function HomePage()
{
    console.log('render homepage')
    return (
        <div>
            <h2>Home Page</h2>
            <Counter />
        </div>
    )
}
