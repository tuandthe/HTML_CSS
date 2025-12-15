import Link from "next/link";
import { SearchBox } from "../components/SearchBox";

export default async function BlogPage({
    params 
}: { 
    params: { id: string } 
}) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // Server Component - fetch data directly
    const post = await posts.json();
  return (
      <div>
      <h1>{post.name}</h1>
      <div>{post.username}</div>
      <Link href={`/blogs/${post.id}`}/>
      <SearchBox />
      </div>
  );
};