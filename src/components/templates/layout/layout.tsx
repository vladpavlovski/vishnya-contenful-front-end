import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement } from 'react';

import { Header } from '../header';

import { CtfFooterGql } from '@src/components/features/ctf-components/ctf-footer/ctf-footer-gql';
import { CtfMobileMenuGql } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu-gql';

interface LayoutPropsInterface {
  preview: boolean;
  children: ReactElement;
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setMenuOpen(false);
    });

    router.events.on('routeChangeComplete', () => {
      if (document.activeElement === null) {
        return;
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  }, [router.events]);

  return (
    <>
      {/* header */}
      <Header isMenuOpen={isMenuOpen} onMenuClick={() => setMenuOpen(true)} />

      {/* content */}
      <div className={''}>{children}</div>

      {/* footer */}
      <CtfFooterGql />

      {/* mobile menu */}
      <CtfMobileMenuGql
        isOpen={isMenuOpen}
        onOpenChange={(newOpen: boolean) => {
          setMenuOpen(newOpen);
        }}
      />
    </>
  );
};
