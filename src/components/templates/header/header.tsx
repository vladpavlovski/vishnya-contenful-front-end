import { useTranslation } from 'next-i18next';

import { CtfNavigationGql } from '@src/components/features/ctf-components/ctf-navigation/ctf-navigation-gql';
import { Link } from '@src/components/shared/link';

interface HeaderPropsInterface {
  isMenuOpen?: boolean;
  onMenuClick?: () => any;
}

export const Header = (props: HeaderPropsInterface) => {
  const { t } = useTranslation();

  const { onMenuClick, isMenuOpen } = props;

  return (
    <header className={''} style={{ boxShadow: '0 2px 6px #00000021' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Link href="/" withoutMaterial title={t('common.homepage')}>
            Logo here
          </Link>
          <div style={{ display: 'none' }}>
            <div className={''} style={{ display: 'flex', alignItems: 'center' }}>
              <CtfNavigationGql />
            </div>
          </div>
        </div>

        {/* menu button */}
        <div style={{ display: 'block', marginLeft: 'auto' }}>
          <button
            title={t('navigation.mobileMenuButton')}
            onClick={() => onMenuClick?.()}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="dialog"
            className={''}
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      </div>
    </header>
  );
};
