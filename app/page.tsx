import { Todos } from "@/src/components/server/Todos/Todos";
import { Suspense } from "react";
import { SpinningWheel } from "@/src/components/server/SpinningWheel/SpinningWheel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-21">
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
    </main>
  );
}

const Loader = () => (
  <div className="p-5">
    <SpinningWheel />
  </div>
);
