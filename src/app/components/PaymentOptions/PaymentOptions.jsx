import { useState } from 'react';
import { TabNames } from '../../const';
import { Tabs } from '../Tabs/Tabs';
import cn from 'classnames';
import styles from './PaymentOptions.module.scss';

export const PaymentOptions = () => {
	const [activeTab, setActiveTab] = useState(TabNames.Credit);

	const handleTabClick = (event) => {
    event.preventDefault();
    const value = event.target.textContent;
    setActiveTab(value);
  };
	return (
		<>
			<nav className={styles.navigation}>
				<ul className={styles.list} onClick={handleTabClick} >
					<li
						className={cn(styles.listItem, activeTab === TabNames.Credit ? styles.listItemActive : '')}
					>
						<button type="button">{TabNames.Credit}</button>
					</li>

					<li
						className={cn(styles.listItem, activeTab === TabNames.Gift ? styles.listItemActive : '')}
					>
						<button type="button">{TabNames.Gift}</button>
					</li>

					<li
						className={cn(styles.listItem, activeTab === TabNames.PayPal ? styles.listItemActive : '')}
					>
						<button type="button">{TabNames.PayPal}</button>
					</li>
				</ul>
			</nav>
			<Tabs activeTab={activeTab} />
		</>
	);
};
