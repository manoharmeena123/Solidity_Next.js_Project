import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x30bF79927024C0421CE8E5fFcFD8DBaF948EA46D'
);
// c
export default instance;
