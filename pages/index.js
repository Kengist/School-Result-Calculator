import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layouts from "../Components/Layouts";
import gif from "../200w.gif";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Result Calculator</title>
        <meta name="description" content="Designed by Wendy Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          height: "80px",
          background: "#0070f3",
          alignItems: "center",
          display: "flex",
          padding: "10px",
        }}
      >
        {/* <h1 className={styles.title}>Student Result Calculator</h1> */}
        <h1 className={styles.title}>Student Result Calculator</h1>
      </header>
      <main className={styles.main}>
        <div>
          <Image
            src={gif}
            alt="..."
            style={{ height: "82vh", width: "100vh" }}
          />
        </div>
        <div className={styles.rightcontent}>
          <h1
            style={{
              fontSize: "3rem",
              color: "#0070f3",
              marginTop: "4rem",
              fontWeight: "bold",
            }}
          >
            Real world High School
          </h1>
          <p className={styles.description}>Login to get started </p>
          <div>
            <Link
              href="login/"
              className={` shadow-sm text-bold ${styles.btn}`}
            >
              Login
            </Link>
          </div>
        </div>

        {/* <div className={styles.grid}>
          <a href="#" className={`${styles.card} shadow-sm hover:shadow-lg`}>
            <h2>Check Result &rarr;</h2>
            <p>You can Check different Student results</p>
          </a>

          <a href="#" className={`${styles.card} shadow-sm hover:shadow-lg`}>
            <h2>Report Student &rarr;</h2>
            {/* <p>You can report student's activities</p> */}
        {/* </a> */}
        {/* <a
            href="#"
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={`${styles.card} shadow-sm hover:shadow-lg`}
          >
            <h2>Calculate CGPA &rarr;</h2>
            <p>You can calculate student Cummlative Grade Point</p>
          </a>

          <a
            href="#" */}
        {/* // href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} shadow-sm hover:shadow-lg`}
          >
            <h2>Send Result &rarr;</h2> */}
        {/* <p>
              You can send Student results to student's guardian
            </p> */}
        {/* </a> */}
        {/* </div> */}
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            PROGFAMS technology
          </span>
        </a>
      </footer>
    </div>
  );
}
