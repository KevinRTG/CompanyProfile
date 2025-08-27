import dynamic from 'next/dynamic';

const ClientNavbar = dynamic(() => import('./ClientNavbar'), { ssr: false });

export default function Navbar() {
  return <ClientNavbar />;
}
