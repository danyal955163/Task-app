export function Button({children,className='',...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&{className?:string}){return <button className={`btn ${className}`} {...props}>{children}</button>}
export function Card({children,className=''}:{children:React.ReactNode;className?:string}){return <div className={`card ${className}`}>{children}</div>}
export function Badge({children,tone='success'}:{children:React.ReactNode;tone?:string}){return <span className={`pill ${tone}`}>{children}</span>}
export function Progress({value}:{value:number}){return <div style={{height:8,borderRadius:9,background:'#e5e7eb',overflow:'hidden'}}><div style={{width:`${Math.min(100,Math.max(0,value))}%`,height:'100%',background:'#10b981'}}/></div>}
export function EmptyState({message='No records found'}:{message?:string}){return <div className="card" style={{textAlign:'center'}}><p className="muted">{message}</p></div>}
