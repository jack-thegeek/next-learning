export default async function Page() {
    const data = 'Server-Side Rendered Page'
    return (
        <div>
            <h1>Home Page</h1>
            <pre>{data}</pre>
        </div>
    );
}
