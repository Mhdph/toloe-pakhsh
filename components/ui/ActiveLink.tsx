import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  href,
  className,
  activeClassName,
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname;
  console.log(pathname);
  return (
    <Link className={cn(isActive ? activeClassName : className)} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
