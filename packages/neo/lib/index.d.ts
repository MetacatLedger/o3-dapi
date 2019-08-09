import { getProvider, Provider } from './modules/read/getProvider';
import { getNetworks, GetNetworksOutput } from './modules/read/getNetworks';
import { getAccount, Account } from './modules/read/getAccount';
import { getPublicKey, PublicKeyOutput } from './modules/read/getPublicKey';
import { GetBalanceArgs, BalanceResults } from './modules/read/getBalance';
import { GetStorageArgs, GetStorageOutput } from './modules/read/getStorage';
import { InvokeReadArgs } from './modules/read/invokeRead';
import { VerifyMessageInput, VerifyMessageOutput } from './modules/read/verifyMessage';
import { BlockDetails, GetBlockInputArgs } from './modules/read/getBlock';
import { GetBlockHeightInputArgs } from './modules/read/getBlockHeight';
import { TransactionInputArgs, TransactionDetails } from './modules/read/getTransaction';
import { ApplicationLog } from './modules/read/getApplicationLog';
import { send, SendArgs, SendOutput } from './modules/write/send';
import { invoke, InvokeArgs, InvokeOutput } from './modules/write/invoke';
import { invokeMulti, InvokeMultiArgs } from './modules/write/invokeMulti';
import { deploy, DeployArgs, DeployOutput } from './modules/write/deploy';
import { signMessage, SignMessageInput, Signature } from './modules/write/signMessage';
import { disconnect } from './modules/disconnect';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { ArgumentDataType, EventName } from './constants';
declare class O3dapiNeo {
    static blockchain: string;
    isAvailable: boolean;
    getProvider: typeof getProvider;
    getNetworks: typeof getNetworks;
    getAccount: typeof getAccount;
    getPublicKey: typeof getPublicKey;
    getBalance: getBalance;
    getStorage: getStorage;
    invokeRead: invokeRead;
    verifyMessage: verifyMessage;
    getBlock: getBlock;
    getBlockHeight: getBlockHeight;
    getTransaction: getTransaction;
    getApplicationLog: getApplicationLog;
    send: typeof send;
    invoke: typeof invoke;
    invokeMulti: typeof invokeMulti;
    deploy: typeof deploy;
    signMessage: typeof signMessage;
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    disconnect: typeof disconnect;
    Constants: {
        EventName: typeof EventName;
        ArgumentDataType: typeof ArgumentDataType;
    };
    private clientPlugin;
    constructor(sendMessageMethod: any, addEventListenerMethod: any);
    setClientPlugin(plugin: any): void;
}
export default O3dapiNeo;
export declare type getProvider = () => Promise<Provider>;
export declare type getNetworks = () => Promise<GetNetworksOutput>;
export declare type getAccount = () => Promise<Account>;
export declare type getPublicKey = () => Promise<PublicKeyOutput>;
export declare type getBalance = (data: GetBalanceArgs) => Promise<BalanceResults>;
export declare type getStorage = (data: GetStorageArgs) => Promise<GetStorageOutput>;
export declare type invokeRead = (data: InvokeReadArgs) => Promise<any>;
export declare type verifyMessage = (data: VerifyMessageInput) => Promise<VerifyMessageOutput>;
export declare type getBlock = (data: GetBlockInputArgs) => Promise<BlockDetails>;
export declare type getBlockHeight = (data: GetBlockHeightInputArgs) => Promise<any>;
export declare type getTransaction = (data: TransactionInputArgs) => Promise<TransactionDetails>;
export declare type getApplicationLog = (data: TransactionInputArgs) => Promise<ApplicationLog>;
export declare type send = (data: SendArgs) => Promise<SendOutput>;
export declare type invoke = (data: InvokeArgs) => Promise<InvokeOutput>;
export declare type invokeMulti = (data: InvokeMultiArgs) => Promise<InvokeOutput>;
export declare type deploy = (data: DeployArgs) => Promise<DeployOutput>;
export declare type signMessage = (data: SignMessageInput) => Promise<Signature>;
export declare type disconnect = () => Promise<boolean>;
export declare type addEventListener = (event: EventName, callback: Function) => void;
export declare type removeEventListener = (event: EventName) => void;
//# sourceMappingURL=index.d.ts.map