import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
    </>
  );
};

export default Layout;
