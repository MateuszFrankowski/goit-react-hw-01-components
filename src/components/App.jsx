import { Statistics } from '../components/statistic/statistic.js';
import data from '../components/statistic/data.json';
export const App = () => {
  return (
    <div className="App">
      <Statistics stats={data} title={'Upload stats'} />
    </div>
  );
};
