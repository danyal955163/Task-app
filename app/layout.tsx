import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'CashCoin — Earn Real Money in Pakistan', description: 'Complete tasks and withdraw via JazzCash.' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="shell"><header className="header"><Link href="/" className="brand">◉ CashCoin ✓</Link><nav className="nav"><Link href="/dashboard">Dashboard</Link><Link href="/tasks">Tasks</Link><Link href="/wallet">Wallet</Link><Link href="/packages">Packages</Link><Link href="/profile">Profile</Link></nav><Link className="btn" href="/dashboard">Open app</Link></header>{children}<nav className="bottom"><Link href="/dashboard">⌂<span>Dashboard</span></Link><Link href="/tasks">✓<span>Tasks</span></Link><Link href="/free-tasks">✦<span>Free Tasks</span></Link><Link href="/wallet">▣<span>Wallet</span></Link><Link href="/profile">●<span>Profile</span></Link></nav></div>;
}
