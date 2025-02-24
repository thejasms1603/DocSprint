import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const Header = ({ children, className } : HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <Link href='/' className='md:flex-1'>
        <div className="flex items-center gap-2">
        <Image
          src='/assets/icons/logo-icon.svg'
          alt='Logo'
          width={32}
          height={32}
          className='size-10'
          />
        <p className="hidden md:block font-bold text-lg">DocSprint</p>
          </div>
      </Link>
      {children}
    </div>
  );
};

export default Header;
