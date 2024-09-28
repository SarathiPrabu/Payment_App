export default async function Page() {
    const users = await fetch("http://localhost:3001/api/users").then((res) => res.json());
    return (
      <div className={"text-center text-5xl font-mono"}>
            <h1>Hello!! from Next.js user app</h1>
            <pre className={"text-2xl"}>{JSON.stringify(users, null, 2)}</pre>
      </div>
  );
}
