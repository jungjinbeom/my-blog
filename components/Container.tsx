import Head from "next/head";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import metadata from "../data/metadata";

const Container = (props) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>내 블로그</title>
      </Head>
      <header
        className={`w-fill max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/logo.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
