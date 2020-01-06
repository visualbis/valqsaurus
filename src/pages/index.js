import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Modeling</>,
    imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-modeling.png',
    description: (
      <>
        Model your business by capturing 1000+ business variables across various functions in ValQ.
      </>
    ),
  },
  {
    title: <>Visualization</>,
    imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-visualization.png',
    description: (
      <>
        Visualize your business model instantly by connecting your Key Drivers to Key Performance Indicators.
      </>
    ),
  },
  {
    title: <>Simulation</>,
    imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-simulation.png',
    description: (
      <>
        Perform what-if analysis, run on-the-fly simulations and compare multiple business scenarios with ValQ.
      </>
    ),
  },
  {
    title: <>Planning</>,
    imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-planning.png',
    description: (
      <>
        Plan, budget and forecast your business operations efficiently and optimize your goals.
      </>
    ),
  },
  {
    title: <>Advanced Analysis</>,
    imageUrl: 'https://cdn.valq.com/wp-content/uploads/valq-key-features-advanced-analytics.png',
    description: (
      <>
        Run in-depth and nimble Variance Analysis with minimal clicks.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} - Modern Digital Planning`}
      description="ValQ - Modern Digital Planning">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/general/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
