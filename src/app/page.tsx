import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to about</Link>
    </div>
  );
}

//create Homepage and about page
//Must have About button
//The About button should take you to the about page 
