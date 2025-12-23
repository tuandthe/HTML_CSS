"use client";

export default function SidebarDesktopWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="hidden lg:block lg:w-64 lg:fixed">{children}</div>;
}
