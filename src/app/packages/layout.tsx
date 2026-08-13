import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding & Celebration Packages | ANEW",
  description:
    "Wedding and celebration packages at ANEW Retreat & Spa, a private estate in Kenmore, Washington. From wedding-day venue rental to an all-inclusive estate weekend.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
