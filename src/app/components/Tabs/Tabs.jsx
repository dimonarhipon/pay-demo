import { TabCredit } from '../TabCredit/TabCredit';
import { TabGift } from '../TabGift/TabGift';
import { TabPayPal } from '../TabPayPal/TabPayPal';
import PropTypes from 'prop-types';
import { TabNames } from '../../const';
import styles from './Tabs.module.scss';

export const Tabs = ({ activeTab, formData, setFormData }) => {
  const renderActiveTab = (tab) => {
    switch (tab) {
      case TabNames.Credit:
        return <TabCredit formData={formData} setFormData={setFormData} />;
      case TabNames.Gift:
        return <TabGift />;
      case TabNames.PayPal:
        return <TabPayPal />;
      default:
        return '';
    }
  };

  return (
    <div className={styles.wrap}>
      {renderActiveTab(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  formData: PropTypes.object,
	setFormData: PropTypes.func,
};
