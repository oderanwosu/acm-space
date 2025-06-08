import Footer from "@/components/layouts/footer";

export default function SaveOurLabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      {children}
      <Footer />
    </body>
  );
}
