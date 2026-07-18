import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Builders in Kerala | 17+ Years Experience",
  description: "Maskan Builders is one of the best builders in Kerala, 17+ years, 750+ residential & commercial projects completed across the state.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
