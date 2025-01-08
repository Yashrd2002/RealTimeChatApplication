import AuthForm from "./components/AuthForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left Column (CTA) */}
      <div
        className="lg:w-1/2 p-10"
        style={{ background: "linear-gradient(45deg, #6E39CB, #9f74e8)" }}
      >
        <div className="flex flex-col  h-full">
          <h1 className="text-4xl font-bold mt-10  text-white tracking-wider">
            Connect in an Instant,<br /> Chat Without Limits!
          </h1>
          <div className="absolute bottom-0 right-1/2 md:block hidden">
            <img src="/images/image.png" alt="" className="w-[620px]"/>
          </div>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="lg:w-1/2 bg-gray-100 p-10">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-md">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={72}
            width={72}
            src="/images/logoq.png"
          />

          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
            Join to Chat !
          </h2>

          {/* Auth Form */}
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
