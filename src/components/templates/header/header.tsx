import { CtfNavigationGql } from '@src/components/features/ctf-components/ctf-navigation/CtfNavigationGql'
import { Link } from '@src/components/shared/Link'

export const Header = () => {
  return (
    <header className={''} style={{ boxShadow: '0 2px 6px #00000021' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Link href="/" withoutMaterial title={'Homepage'}>
            Logo here
          </Link>
          <div style={{ display: 'none' }}>
            <div className={''} style={{ display: 'flex', alignItems: 'center' }}>
              <CtfNavigationGql />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
