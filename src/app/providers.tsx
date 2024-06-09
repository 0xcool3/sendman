import { NextUIProvider } from "@nextui-org/react";
import { RainbowKitProvider } from "./RainbowKitProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </NextUIProvider>
  );
}
