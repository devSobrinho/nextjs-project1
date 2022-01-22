import P from 'prop-types';

import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

// getStaticPaths é usando apenas quando usa getStaticProps [para mostrar os caminhos], ja q seria uma page static
// export const getStaticPaths = async () => {
//   const paths = (await loadPages()).map((page) => {
//     return {
//       params: {
//         slug: page.slug,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  let data = null;
  try {
    data = await loadPages(context.params?.slug);
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
