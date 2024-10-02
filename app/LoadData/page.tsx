import { Suspense } from "react";
import { getData } from "../data";
import Link from "next/link";

export default async function LoadDataPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    size?: string;
  };
}) {
  const query = (await searchParams?.query) || "";
  const currentPage = Number(await searchParams?.page) || 1;

  const data = await getData(query, currentPage);

  return (
    <>
      <div className="container mx-auto py-10">
        <Suspense
          key={query + currentPage}
          fallback={<div>Loading Data...</div>}
        >
          <div>Data: {data}</div>
        </Suspense>
      </div>
      <div className="flex flex-col">
        {/* None of the Links will trigger loading.tsx to be displayed */}
        <Link href="/LoadData?page=1">Page 1</Link>
        <Link href="/LoadData?page=2">Page 2</Link>
        <Link href="/LoadData?page=3">Page 3</Link>
      </div>
    </>
  );
}
