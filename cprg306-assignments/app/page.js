import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2">week-2</Link>
        <Link href="/week-3">week-3</Link>
        <Link href="/week-4">week-4</Link>
        <Link href="/week-5">week-5</Link>
      </div>
    </main>
  );
}
