import { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './Projects.module.css'

const GITHUB_SVG = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const projects = [
  {
    cat: 'de',
    title: 'Hospital Ward Epidemic Control (Network Analysis)',
    gh: 'https://github.com/arvindermundraa/STAT636-Group17-hospital-centrality',
    bullets: [
      'Team project (STAT 636): compared degree, betweenness, eigenvector and harmonic centrality for choosing who to isolate',
      'Weighted SIR simulations on a 75-person hospital contact network; every table reproduces from one R script',
      'With 10 people isolated, attack rate fell from 17.5% (random) to 4.8-7.0% at low transmission',
    ],
    chips: ['R', 'igraph', 'Network Analysis', 'Simulation'],
  },
  {
    cat: 'ml',
    title: 'Yelp Review Rating Classifier',
    gh: 'https://github.com/arvindermundraa/yelp-sentiment-analysis',
    bullets: [
      'Team project (ECEN 758): 5-class star rating prediction from review text',
      'BiLSTM vs CNN-BiLSTM in PyTorch with Optuna hyperparameter tuning',
      'BiLSTM reached 67.62% test accuracy on 50,000 held-out reviews; CNN-BiLSTM 66.68%',
    ],
    chips: ['Python', 'PyTorch', 'BiLSTM', 'NLP', 'Optuna'],
  },
  {
    cat: 'ml',
    title: 'LSTM Stock Price Prediction',
    gh: 'https://github.com/arvindermundraa/LSTM-Based-Stock-Price-Prediction',
    bullets: [
      'Team project (STAT 656): next-day AAPL close from a 30-day window',
      'Single-layer baseline vs 5-layer stacked LSTM in PyTorch, chronological 80/10/10 split',
      'Stacked model cut test MAE from $24.45 to $18.44',
    ],
    chips: ['Python', 'PyTorch', 'LSTM', 'Pandas', 'NumPy'],
  },
  {
    cat: 'ml',
    title: 'Customer Segmentation',
    gh: 'https://github.com/arvindermundraa/customer-segmentation',
    bullets: [
      'RFM and behavioural features for 4,306 customers from 541,909 retail transactions',
      'PCA to 4 components (93.59% of variance), then K-Means, hierarchical clustering and DBSCAN',
      'K-Means with k=3 selected; a classifier recovered the segments with 99.65% test accuracy',
    ],
    chips: ['Python', 'Scikit-Learn', 'K-Means', 'PCA', 'Matplotlib'],
  },
]

const FILTERS = [
  { key: 'all', label: 'All' },
    { key: 'ml', label: 'Machine Learning' },
  { key: 'de', label: 'Data & Statistics' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = projects.filter(p => active === 'all' || p.cat === active)

  return (
    <section id="projects">
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <FadeIn><span className="sec-label">05 — Projects</span></FadeIn>
            <FadeIn delay={0.06}><h2 className="sec-title">Featured <span>Work</span></h2></FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className={styles.filterRow}>
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`${styles.ftab} ${active === f.key ? styles.on : ''}`}
                  onClick={() => setActive(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className={styles.grid}>
          {visible.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className={`card ${styles.card}`}>
                <div className={styles.head}>
                  <span className={`${styles.badge} ${p.cat === 'ml' ? styles.badgeMl : p.cat === 'de' ? styles.badgeDe : styles.badgeFs}`}>
                    {p.cat === 'ml' ? 'Machine Learning' : p.cat === 'de' ? 'Data & Statistics' : 'Full-Stack'}
                  </span>
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" className={styles.ghLink} aria-label="GitHub">
                    {GITHUB_SVG}
                  </a>
                </div>
                <div className={styles.title}>{p.title}</div>
                <ul className={styles.bullets}>
                  {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
                <div className={styles.chips}>
                  {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
