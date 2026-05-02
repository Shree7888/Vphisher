"use client";

import dynamic from "next/dynamic";

const ClientOnly = dynamic(() => Promise.resolve(() => {
  return (
    <div className="h-screen bg-zinc-950 text-white flex items-center justify-center">
      App Loaded Successfully ✅
    </div>
  );
}), { ssr: false });

export default function Home() {
  return <ClientOnly />;
}