import { Icon } from '@iconify/react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './projects.module.css';

interface ProjectButtonProps {
  label: string;
  icon: string;
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
        label: 'View on Marketplace',
        icon: 'mdi:visual-studio-code',
        href: 'https://marketplace.visualstudio.com/items?itemName=edacation.edacation'
      },
      {
        label: 'View on GitHub',
        icon: 'mdi:github',
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
        label: 'Try the Web App',
        icon: 'mdi:web',
        href: 'https://edacation.github.io/nextpnr-viewer/'
      },
      {
        label: 'View on NPM',
        icon: 'gg:npm',
        href: 'https://www.npmjs.com/package/nextpnr-viewer'
      },
      {
        label: 'View on GitHub',
        icon: 'mdi:github',
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
        label: 'View on Marketplace',
        icon: 'mdi:visual-studio-code',
        href: 'https://marketplace.visualstudio.com/items?itemName=edacation.pincfg-editor'
      },
      {
        label: 'View on GitHub',
        icon: 'mdi:github',
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
        label: 'View on NPM',
        icon: 'gg:npm',
        href: 'https://www.npmjs.com/package/edacation'
      },
      {
        label: 'View on GitHub',
        icon: 'mdi:github',
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
        label: 'View on GitHub',
        icon: 'mdi:github',
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
                  <div className={styles.cardActions}>
                    {project.buttons.map((button) => (
                      <a
                        key={button.label}
                        className={styles.iconButton}
                        href={button.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={button.label}
                      >
                        <Icon className={styles.iconSvg} icon={button.icon} />
                        <span className={styles.iconLabel}>{button.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
