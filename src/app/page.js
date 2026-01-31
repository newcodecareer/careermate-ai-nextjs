import Image from "next/image";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header/>
      <SignUp/>
    </div>
  );
}
