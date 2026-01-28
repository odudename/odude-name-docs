import Image from 'next/image';

export function Logo() {
  return <Image src="/odude.svg" alt="Odude Logo" width={160} height={40} priority />;
}
