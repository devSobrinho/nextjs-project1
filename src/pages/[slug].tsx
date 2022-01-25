import { useRouter } from 'next/router';

import { loadPages } from '../api/load-pages';
import { Loading } from '../templates/Loading';
import Home, { HomeProps } from '../templates/Home';
import { GetStaticPaths, GetStaticProps } from 'next';

export type PageProps = {
  data: [];
};

export default function Page({ data }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return <Home data={data} />;
}

// getStaticPaths é usando apenas quando usa getStaticProps [para mostrar os caminhos], ja q seria uma page static
export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });

  return {
    paths: [{ params: { slug: 'udemy' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;
  try {
    data = await loadPages(context.params?.slug as string);
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
    revalidate: 30,
  };
};
