import { TabCredit } from '../TabCredit/TabCredit';
import { TabGift } from '../TabGift/TabGift';
import { TabPayPal } from '../TabPayPal/TabPayPal';
import PropTypes from 'prop-types';
import { TabNames } from '../../const';

export const Tabs = ({ activeTab }) => {
  const renderActiveTab = (tab) => {
    switch (tab) {
      case TabNames.Credit:
        return <TabCredit />;
      case TabNames.Gift:
        return <TabGift />;
      case TabNames.PayPal:
        return <TabPayPal />;
      default:
        return '';
    }
  };

  return (
    <div>
      {renderActiveTab(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired
};
