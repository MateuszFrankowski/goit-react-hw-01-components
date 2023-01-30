import PropTypes from 'prop-types';
import css from './statistic.module.css';
export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.Statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(stat => (
          <li className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    docx: PropTypes.number,
    mp3: PropTypes.number,
    pdf: PropTypes.number,
    psd: PropTypes.number,
  }).isRequired,
  title: PropTypes.string,
};
