import Image from "next/image";
import Overview from "./ui/home/overview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Overview />
    </main>
  );
}
