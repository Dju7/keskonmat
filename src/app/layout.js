
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import "./globals.css";



export const metadata = {
  title: "KessKonMat",
  description: "Are you looking for something to Watch  ?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SideBar/>
        {children}
        </body>
    </html>
  );
}
