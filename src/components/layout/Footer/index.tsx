import Link from "next/link";

export const Footer = () => (
  <nav className="w-full px-6 md:px-80 py-4 bg-primary-10 flex gap-5">
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
);
