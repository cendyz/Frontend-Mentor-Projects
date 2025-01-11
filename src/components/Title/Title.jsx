import styles from './Title.module.scss'
import avatar from '../../images/avatar.png'

const Title = () => {
	return (
		<>
			<h1 className={styles.title}>Frontend Mentor Projects</h1>
			<div className={styles.box}>
				<p className={styles.desc}>By cendyz</p>
				<img src={avatar} alt='Github avatar' className={styles.img} />
			</div>
		</>
	)
}
export default Title
