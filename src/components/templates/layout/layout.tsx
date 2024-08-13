import React from 'react'

import { Header } from '../header/Header'

import { CtfFooterGql } from '@src/components/features/ctf-components/ctf-footer/CtfFooterGql'
import { CtfMobileMenuGql } from '@src/components/features/ctf-components/ctf-mobile-menu/CtfMobileMenuGql'

interface LayoutPropsInterface {
  preview: boolean
  children: React.ReactElement
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () => {
  //     setMenuOpen(false);
  //   });

  //   router.events.on('routeChangeComplete', () => {
  //     if (document.activeElement === null) {
  //       return;
  //     }

  //     if (document.activeElement instanceof HTMLElement) {
  //       document.activeElement.blur();
  //     }
  //   });
  // }, [router.events]);

  return (
    <>
      {/* header */}
      <Header />

      {/* content */}
      <div>{children}</div>

      {/* footer */}
      <CtfFooterGql />

      {/* mobile menu */}
      <CtfMobileMenuGql />
    </>
  )
}
