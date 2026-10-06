export const runtime = 'edge';

import AdminSection from '../[section]/page'; export default function Users(){return <AdminSection params={Promise.resolve({section:'users'})}/>}
