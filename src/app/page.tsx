import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <div className="relative">
        <h2 className={`mb-3 text-8xl text-white font-semibold`}>Faisal Khalid</h2>

        <ul className="inline-block">
          <li className="inline"><a href="https://www.linkedin.com/in/faisalfab/" className="text-white text-2xl hover:underline">Linkdin</a></li>
          <li className="inline ml-6"><a href="https://api.whatsapp.com/send?phone=03344517234" className="text-white text-2xl hover:underline">Whatsapp</a></li>
        </ul>
      </div>

    </main>
  );
}
