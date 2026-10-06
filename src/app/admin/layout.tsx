export const runtime = 'edge';

import Link from 'next/link';
export default function AdminLayout({children}:{children:React.ReactNode}){return <><div className="card" style={{borderRadius:0,margin:0,padding:'10px 20px',position:'sticky',top:64,zIndex:5}}><span className="pill">Admin Panel</span><nav className="nav" style={{display:'flex',flexWrap:'wrap',marginTop:8}}>{['deposits','tasks','task-history','withdrawals','users','broadcast','support','settings'].map(x=><Link href={`/admin/${x}`} key={x}>{x}</Link>)}</nav></div>{children}</>}
