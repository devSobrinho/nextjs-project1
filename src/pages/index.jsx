import P from 'prop-types';

import styled from 'styled-components';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async (context) => {
  let data = null;
  try {
    data = await loadPages('landing-page');
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

Index.propTypes = {
  data: P.array,
};
