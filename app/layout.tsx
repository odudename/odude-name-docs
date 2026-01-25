import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import themeConfig from "../theme.config.jsx";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s – Odude Docs",
    default: "Odude Docs",
  },
  description: "The official documentation for Odude projects.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body suppressHydrationWarning>
        <Layout
          navbar={
            <Navbar
              logo={themeConfig.logo}
              projectLink={themeConfig.project?.link}
              chatLink={themeConfig.chat?.link}
            >
              <Search />
              <ThemeSwitch />
            </Navbar>
          }
          footer={
            <Footer className="flex-col items-center">
              <div className="flex items-center gap-1">
                {themeConfig.footer?.text}
              </div>
            </Footer>
          }
          editLink={themeConfig.editLink?.text}
          docsRepositoryBase={themeConfig.docsRepositoryBase}
          sidebar={themeConfig.sidebar}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: 'dark', storageKey: 'odude-theme' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

