import { AppProps } from "next/app"
import { FC } from 'react';
import "@assets/main.css"
import Layout from '../components/Layout/index';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;