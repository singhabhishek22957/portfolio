// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTopButton from "@/../utils/ScrollToTopButton";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Abdul Basit | Full Stack Developer & AI Automation Expert",
//   description:
//     "Explore the portfolio of Abdul Basit, a Professional Full Stack Developer specializing in Next.js, AI Automation, and modern web solutions. Built for performance and user experience.",
//   keywords: [
//     "Abdul Basit",
//     "Full Stack Developer",
//     "Next.js Portfolio",
//     "AI Automation",
//     "Software Engineer",
//     "React Developer",
//   ],
//   authors: [{ name: "Abdul Basit" }],
//   openGraph: {
//     title: "Abdul Basit | Personal Portfolio",
//     description:
//       "Full Stack Developer & AI Automation Expert — Building the future of the web.",
//     url: "https://abdulbasit-005.vercel.app",
//     siteName: "Abdul Basit Portfolio",
//     images: [
//       {
//         url: "/Website-overview.png",
//         width: 1200,
//         height: 630,
//         alt: "Abdul Basit Portfolio Overview",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Abdul Basit | Full Stack Developer",
//     description: "Building modern web applications and AI automations.",
//     images: ["/Website-overview.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <main className="text-white">
//           <div className="container">{children}</div>
//         </main>
//         <ScrollToTopButton />
//         <Footer />
//       </body>
//     </html>
//   );
// }





import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";

const geistSans = localFont({
src: "./fonts/GeistVF.woff",
variable: "--font-geist-sans",
weight: "100 900",
});

const geistMono = localFont({
src: "./fonts/GeistMonoVF.woff",
variable: "--font-geist-mono",
weight: "100 900",
});

export const metadata: Metadata = {
metadataBase: new URL("https://your-portfolio-domain.com"),

title: {
default: "Abhishek Singh | MERN Stack Developer",
template: "%s | Abhishek Singh",
},

description:
"Portfolio of Abhishek Singh, MCA 2026 Graduate and MERN Stack Developer specializing in Next.js, React.js, Node.js, MongoDB, TypeScript, and Full Stack Web Development.",

keywords: [
"Abhishek Singh",
"MERN Stack Developer",
"MCA 2026 Graduate",
"Full Stack Developer",
"Next.js Developer",
"React Developer",
"Node.js Developer",
"MongoDB Developer",
"TypeScript Developer",
"Software Engineer",
"Portfolio",
"Web Developer",
"India",
],

authors: [
{
name: "Abhishek Singh",
},
],

creator: "Abhishek Singh",

openGraph: {
title: "Abhishek Singh | MERN Stack Developer",
description:
"MCA 2026 Graduate and MERN Stack Developer building scalable web applications using Next.js, React, Node.js, MongoDB, and TypeScript.",

url: "https://your-portfolio-domain.com",

siteName: "Abhishek Singh Portfolio",

images: [
  {
    url: "/Website-overview.png",
    width: 1200,
    height: 630,
    alt: "Abhishek Singh Portfolio",
  },
],

locale: "en_US",
type: "website",


},

twitter: {
card: "summary_large_image",
title: "Abhishek Singh | MERN Stack Developer",
description:
"MCA 2026 Graduate | MERN Stack Developer | Next.js | React | Node.js | MongoDB",


images: ["/Website-overview.png"],


},

robots: {
index: true,
follow: true,
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="en">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
> <Navbar />

    <main className="text-white">
      <div className="container">{children}</div>
    </main>

    <ScrollToTopButton />

    <Footer />
  </body>
</html>


);
}

