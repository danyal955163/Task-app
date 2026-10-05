export type Profile={id:string;email?:string;username?:string;deposit_wallet?:number;withdrawal_wallet?:number;coins?:number;total_earnings?:number;total_deposits?:number;total_withdrawals?:number;package_name?:string;package_expires_at?:string};
export type CashTask={id:string;title:string;description?:string;coins:number;is_free_task:boolean;status?:string;image_url?:string};
