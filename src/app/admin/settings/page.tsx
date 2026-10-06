export const runtime = 'edge';

import AdminSection from '../[section]/page'; export default function Settings(){return <AdminSection params={Promise.resolve({section:'settings'})}/>}
