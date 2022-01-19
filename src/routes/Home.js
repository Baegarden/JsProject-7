import Slide from '../components/Slide';
import styles from './Home.module.css';

function Home() {
  const navList = [
    {
      title: 'High Rating',
      path: 'minimum_rating=8',
    },
    {
      title: 'Romance',
      path: 'genre=romance',
    },
    {
      title: 'Thriller',
      path: 'genre=thriller',
    },
    {
      title: 'Animation',
      path: 'genre=animation',
    },
  ];

  return (
    <div className={styles.container}>
      {navList.map((slide, index) => {
        return (
          <div className={styles.slide_box} key={index}>
            <h3 className={styles.title}>
              <span>{slide.title} Movie</span>
            </h3>
            <Slide
              api={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
