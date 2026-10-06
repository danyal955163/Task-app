export const runtime = 'edge';

import Link from 'next/link'; import { Page, Stat } from '../ui';
export default function Admin(){return <Page title="Admin Panel" subtitle="CashCoin operations overview"><div className="grid grid4"><Stat label="Total Users" value="10,423"/><Stat label="Pending Deposits" value="24"/><Stat label="Total Deposits" value="Rs.5M+"/><Stat label="Active Tasks" value="156"/></div><div className="card" style={{marginTop:16}}><h2>Manage</h2><div className="row" style={{justifyContent:'flex-start',flexWrap:'wrap'}}>{['deposits','withdrawals','tasks','task-history','users','broadcast','support','settings'].map(x=><Link className="btn secondary" href={`/admin/${x}`} key={x}>{x}</Link>)}</div></div></Page>}
