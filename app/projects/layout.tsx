import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Construction Projects in Kerala | Maskan Builders",
  description: "See some of the best construction projects in Kerala by Maskan Builders, 750+ residential and commercial builds completed statewide.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
