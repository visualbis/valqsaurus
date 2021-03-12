import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
    {
        title: <>Introduction</>,
        link: "/docs/intro/introduction",
        imageUrl:
            "https://cdn.valq.com/wp-content/uploads/valq-key-features-visualization.png",
        description: (
            <>Visualize, Simulate, Plan, Analyze your business like never before</>
        ),
    },
    {
        title: <>Modeling</>,
        link: "/docs/model/model_overview",
        imageUrl:
            "https://cdn.valq.com/wp-content/uploads/valq-key-features-modeling.png",
        description: (
            <>
                Model your business by capturing 1000+ variables across various functions
            </>
        ),
    },
    {
        title: <>Planning</>,
        link: "/docs/planning/plan_overview",
        imageUrl:
            "https://cdn.valq.com/wp-content/uploads/valq-key-features-planning.png",
        description: (
            <>
                Plan, budget and forecast your business operations efficiently &
                optimize goals
            </>
        ),
    },
    {
        title: <>Time Series Forecasting</>,
        link: "/docs/planning/time_series",
        imageUrl:
            "https://cdn.valq.com/wp-content/uploads/valq-key-features-advanced-analytics.png",
        description: (
            <>
                Perform Time Series Forecasting to make forecast and predict future
                outcomes
            </>
        ),
    },
    {
        title: <>Simulation</>,
        link: "/docs/simulation/simulate_overview",
        imageUrl:
            "https://cdn.valq.com/wp-content/uploads/valq-key-features-simulation.png",
        description: (
            <>
                Perform what-if analysis, run on-the-fly simulations & compare
                multiple scenarios
            </>
        ),
    },
    {
        title: <>Advanced Analysis</>,
        link: "/docs/analysis/analyze_overview",
        imageUrl: "https://cdn.valq.com/wp-content/uploads/variance-analysis.png",
        description: (
            <>Run in-depth and nimble Variance Analysis with minimal clicks</>
        ),
    },
];

function Feature({ imageUrl, title, description, link }) {
    const imgUrl = useBaseUrl(imageUrl);
    const linkUrl = useBaseUrl(link);

    return (
        <Link className={classnames("col col--4")} to={linkUrl}>
          <div className={styles.features}>
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
            <h3> {title} </h3> <p> {description} </p>
          </div>
        </Link>
      );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title} - Modern Visual Planning`}
            description="ValQ - Modern Visual Planning"
        >
            <header className={classnames("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>

                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/intro/introduction")}
                        >
                            Read the Docs
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
        </Layout >
    );
}

export default Home;
