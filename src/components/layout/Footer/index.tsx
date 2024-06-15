import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full px-6 lg:px-40 py-4 bg-secondary-10 flex justify-between gap-4 flex-col lg:flex-row">
      <nav className="flex gap-4 flex-col lg:flex-row">
        <Link href="/" className="underline text-link-100">
          トップ
        </Link>
        <Link href="/securityPolicy" className="underline text-link-100">
          セキュリティーポリシー
        </Link>
        <Link href="/privacyPolicy" className="underline text-link-100">
          プライバシーポリシー
        </Link>
      </nav>
      <p>© {currentYear} More株式会社</p>
    </footer>
  );
};
