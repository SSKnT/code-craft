import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CodeCraft</title>
        <meta
          name="description"
          content="CodeCraft - Your software development partner"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
