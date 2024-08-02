import React from 'react';

import { PersonFieldsFragment } from './__generated/ctf-person.generated';

import { Author } from '@src/components/features/author';
import { CardLeadership } from '@src/components/features/card-leadership';
import { CardPerson } from '@src/components/features/card-person';
import { useLayoutContext } from '@src/layout-context';

interface CtfPersonPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null;
}

export const CtfPerson = (props: CtfPersonPropsInterface) => {
  const layout = useLayoutContext();
  const isLeadership = props.cardStyle === false;

  const containerStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '24px', // Assuming theme.spacing(3) is 24px
    paddingTop: '24px', // Assuming theme.spacing(3) is 24px
    maxWidth: layout.containerWidth,
  };

  return layout.parent === 'quote' ? (
    <div className={''} style={containerStyle}>
      <Author {...props} />
    </div>
  ) : (
    <div className={''} style={{ maxWidth: '100%', padding: 0 }}>
      <div className={''} style={containerStyle}>
        {isLeadership ? <CardLeadership {...props} /> : <CardPerson {...props} />}
      </div>
    </div>
  );
};
