"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import clsx from "clsx";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={clsx(
      "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=unchecked]:bg-input peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full  border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-transparent data-[state=unchecked]:border-[#ACACAC] data-[state=checked]:bg-[#F13739]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={clsx(
        "pointer-events-none mr-1 block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:-translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white data-[state=unchecked]:bg-[#ACACAC]"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
