import Image from "next/image";
import TypewriterEffect from "./components/TypewriterEffect";

export default function Home() {
  const worksArray = ["Front-end web developer", "UI/UX Designer"];

  return (
    <main>
      <div>
        <TypewriterEffect words={worksArray} />
      </div>
    </main>
  );
}
