import { redirect } from "next/navigation";
import { team } from "@/lib/data";

export default function CardIndexPage() {
  // The old /card page always showed the owner's card
  redirect(`/card/${team[0].slug}`);
}
