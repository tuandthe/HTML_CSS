"use client";
import styles from "./layout.module.css";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
