import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { ColorModeProvider } from "@/components/ui/color-mode";
export const metadata: Metadata = {
  title: "Controle de Gastos Pessoais",
  description: "Sistema para controle de gastos pessoais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <ColorModeProvider forcedTheme="light">{children}</ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
