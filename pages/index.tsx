import Chart from "components/Chart/Chart";
import Filters from "components/Filters/Filters";
import Layout from "components/Layout/Layout";
import Table from "components/Table/Table";
import Head from "next/head";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Medical Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout title="Результаты лабораторных исследований">
        <Filters />
        <Chart />
        <Table />
      </Layout>
    </Fragment>
  );
}
