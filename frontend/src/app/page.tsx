import Features from "@/modules/features/Features";
import HeroTop from "@/modules/heroTop/HeroTop";


export default function Home() {
  return (
    <main className="flex-1">
      <HeroTop/>
      <Features/>
    </main>
  )
}
