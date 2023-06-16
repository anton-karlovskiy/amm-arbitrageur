import {
  BigNumber,
  BigNumberish,
  utils
} from 'ethers';

interface Config {
  contractAddress: string;
  logLevel: string;
  minimumProfit: number;
  gasPrice: BigNumber;
  gasLimit: BigNumberish;
  bscScanURL: string;
  concurrency: number;
}

const contractAddress = '0xXXXXXXXXXXXXXXXXXXXXXX'; // `FlashBot` contract address
const gasPrice = utils.parseUnits('10', 'gwei');
const gasLimit = 300000;

const bscScanApiKey = 'XXXXXXXXXXXXXXXX'; // bscscan API key
const bscScanURL = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${bscScanApiKey}`;

const config: Config = {
  contractAddress,
  logLevel: 'info',
  concurrency: 50,
  minimumProfit: 50, // in USD
  gasPrice,
  gasLimit,
  bscScanURL
};

export default config;
