import { Menu } from '../components/Menu';

import mockLink from '../components/NavLinks/mock.js';

export default function bibi() {
  return (
    <>
      <Menu logoData={{ text: 'Logo' }} links={mockLink} />
      <h1>vem a pagina aq</h1>;
    </>
  );
}
