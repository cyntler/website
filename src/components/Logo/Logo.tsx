import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { APP_LOGO_ALT } from '~/constants';

interface LogoProps {
  size?: number;
  asLink?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({ size, asLink }) => {
  const renderLogo = (
    <Image src="/logo.svg" alt={APP_LOGO_ALT} width={size} height={size} />
  );

  if (asLink) {
    return (
      <Link href={asLink}>
        <a>{renderLogo}</a>
      </Link>
    );
  }

  return renderLogo;
};

Logo.defaultProps = {
  size: 40,
};
