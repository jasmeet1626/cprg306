import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2">week-2</Link>
      </div>
    </main>
  );
}