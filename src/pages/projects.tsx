import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './projects.module.css';

interface ProjectButtonProps {
  name: string;
  href: string;
}

type Project = {
  name: string;
  description: string;
  image: string;
  buttons: ProjectButtonProps[];
};

const projects: Project[] = [
  {
    name: 'VSCode-EDAcation',
    description: 'Our flagship project: a single, easy-to-use VSCode extension to use all of our tools.',
    image: 'https://placehold.co/640x360?text=Project+One',
    buttons: [
      {
        name: 'View on Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=edacation.edacation'
      },
      {
        name: 'View on GitHub',
        href: 'https://github.com/EDAcation/vscode-edacation'
      }
    ],
  },
  {
    name: 'Nextpnr Viewer',
    description: 'A web-based viewer for Nextpnr design files, making it easy to visualize FPGA designs right in your browser.',
    image: 'https://placehold.co/640x360?text=Project+Two',
    buttons: [
      {
        name: 'Try the Web App',
        href: 'https://edacation.github.io/nextpnr-viewer/'
      },
      {
        name: 'View on GitHub',
        href: 'https://github.com/EDAcation/nextpnr-viewer'
      }
    ],
  },
  {
    name: 'Pin Constraint Editor',
    description: 'An easy-to-use VSCode extension to edit pin constraint files (.pcf, .lpf, .cst) for various FPGAs.',
    image: 'https://placehold.co/640x360?text=Project+Three',
    buttons: [
      {
        name: 'View on Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=edacation.pincfg-editor'
      },
      {
        name: 'View on GitHub',
        href: 'https://github.com/EDAcation/project-three'
      }
    ],
  },
  {
    name: 'EDAcation',
    description: 'A JavaScript library and CLI for working with EDAcation projects.',
    image: 'https://placehold.co/640x360?text=Project+Four',
    buttons: [
      {
        name: 'View on GitHub',
        href: 'https://github.com/EDAcation/edacation'
      }
    ],
  },
  {
    name: 'Native FPGA Tools',
    description: 'Minimal bundles to instantly run Yosys, Nextpnr, and other tools natively on Windows, macOS, and Linux.',
    image: 'https://placehold.co/640x360?text=Project+Five',
    buttons: [
      {
        name: 'View on GitHub',
        href: 'https://github.com/EDAcation/native-fpga-tools'
      }
    ],
  },
];

export default function Projects(): ReactNode {
  return (
    <Layout
      title="Projects">
      <main className={styles.page}>
        <section className="container">
          <header className={styles.hero}>
            <Heading as="h1" className={styles.title}>
              EDAcation Projects
            </Heading>
            <p className={styles.subtitle}>
              Explore the open-source projects that power the EDAcation ecosystem.
            </p>
          </header>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article key={project.name} className={styles.card}>
                <img
                  className={styles.cardImage}
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                />
                <div className={styles.cardBody}>
                  <Heading as="h2" className={styles.cardTitle}>
                    {project.name}
                  </Heading>
                  <p className={styles.cardDescription}>{project.description}</p>
                  {
                    project.buttons?.map((button) => (
                      <Link
                        className={clsx('button button--secondary button--sm', styles.cardLink)}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {button.name}
                      </Link>
                    ))
                  }
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
