export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F6F8F9] text-gray-900 font-sans">
      {children}
    </div>
  );
}
