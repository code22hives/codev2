import Styles from './event.module.css';

function EventCard({ title, description, link, image = '' }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={Styles.card}>
      <div className={Styles.cardBody}>
        <h2 className={Styles.cardTitle}>{title}</h2>
        <p>{description}</p>
        <a href={link} className={Styles.button}>
          Know More
        </a>
      </div>
    </div>
  );
}

export default EventCard;
