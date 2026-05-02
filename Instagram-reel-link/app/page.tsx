"use client";

import dynamic from "next/dynamic";

const ClientOnly = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <div className="h-screen bg-black text-white flex items-center justify-center">
          Working ✅ No Server Crash
        </div>
      );
    }),
  { ssr: false }
);

export default function Home() {
  return <ClientOnly />;
}