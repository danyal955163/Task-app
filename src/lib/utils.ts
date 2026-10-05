export const cn=(...values:(string|false|null|undefined)[])=>values.filter(Boolean).join(' ');
export const formatPKR=(value:number|string|null|undefined)=>`Rs.${Number(value||0).toLocaleString('en-PK')}`;
