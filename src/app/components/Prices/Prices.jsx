import styles from './Prices.module.scss';
import cn from 'classnames';

export const Prices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.wrapTable}>
				<table className={styles.table} tabIndex={8}>
					<caption><h2 className={styles.title}>Products</h2></caption>
					<tbody className={styles.tableBody}>
						<tr>
							<td className={styles.cell}><a href="https://www.dns-shop.ru/product/37a31d353dba30b1/97-planset-apple-ipad-retina-32gb-wi-fi-white-md514tuarsa-2048x1536ips2x14ghz1gbbtcam5ios-6/opinion/?utm_source=ya.ru" target="_blank" rel="noreferrer">AppleⓇ - iPadⓇ with RetinaⓇ display Wi-Fi - 32GB - White</a></td>
							<td className={cn(styles.cell, styles.price)}>$499.00</td>
						</tr>
						<tr>
							<td className={styles.cell}><a href="https://uyghurs.net/intelligence-u/16gb-a-series-walkman-video-mp3.html" target="_blank" rel="noreferrer">16GB A Series Walkman Video MP3</a></td>
							<td className={cn(styles.cell, styles.price)}>$130.00</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className={styles.wrapTable}>
				<table className={styles.table} tabIndex={9}>
					<caption><h2 className={styles.title}>Shipping method</h2></caption>
					<tbody className={styles.tableBody}>
						<tr>
							<td className={styles.cell}>FedEx</td>
							<td className={cn(styles.cell, styles.price)}>$13.99</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};
