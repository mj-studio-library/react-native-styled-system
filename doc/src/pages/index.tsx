import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description={'Mimic styled-system for React Native'}>
      <main style={{ flex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div className={clsx(styles.heroBanner, 'container')} style={{ paddingBottom: '120px' }}>
          <img src={'img/logo.png'} width={256} height={256} alt={'logo'} />
          <Heading as={'h1'} className={'hero__title'}>
            {siteConfig.title}
          </Heading>
          <p className={'hero__subtitle'}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={'button button--secondary button--lg'} to={'/docs/intro'}>
              {'Getting Started'}
            </Link>
          </div>
          <img
            src={'img/main_code.png'}
            width={400}
            alt={'main_code'}
            style={{
              marginTop: 40,
              borderRadius: 4,
              boxShadow: '0px 0px 24px #eee2',
            }}
          />
          <div style={{ marginTop: 24 }}>
            <code style={{ borderWidth: 1, padding: 5, whiteSpace: 'pre-wrap' }}>
              {'yarn add @react-native-styled-system/core'}
            </code>
          </div>
        </div>
      </main>
    </Layout>
  );
}
