import { NextPage } from 'next';
import {
  withLocalesStaticProps,
  withLocalesStaticPaths,
} from 'next-locales/server';
import { Link, useTranslation } from 'next-locales';

import { Seo } from '~/components/Seo';
import { Layout } from '~/components/Layout';

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('homepage.title')} />
      <Layout>
        <h1 className="text-black dark:text-white text-2xl md:text-4xl xl:text-9xl font-bold tracking-tighter">
          Hello!
        </h1>
        <h1>{t('homepage.title')}</h1>
        <Link href="/post/ataki-paniki-agorafobia">link to post</Link>
      </Layout>
    </>
  );
};

export const getStaticProps = withLocalesStaticProps();
export const getStaticPaths = withLocalesStaticPaths();

export default HomePage;
