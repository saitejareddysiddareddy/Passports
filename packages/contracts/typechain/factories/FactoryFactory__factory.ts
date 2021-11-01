/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FactoryFactory,
  FactoryFactoryInterface,
} from "../FactoryFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "create",
    outputs: [
      {
        internalType: "contract PassportFactory",
        name: "passportFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610f018061010d6000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c8063715018a614620000575780638da5cb5b1462000063578063efc81a8c1462000085578063f2fde38b14620000a7575b600080fd5b62000061620000c7565b005b6200006d62000158565b6040516200007c919062000452565b60405180910390f35b6200008f62000181565b6040516200009e91906200046f565b60405180910390f35b620000c56004803603810190620000bf9190620003b6565b620001c1565b005b620000d1620002c5565b73ffffffffffffffffffffffffffffffffffffffff16620000f162000158565b73ffffffffffffffffffffffffffffffffffffffff16146200014a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200014190620004ae565b60405180910390fd5b620001566000620002cd565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033604051620001929062000391565b6200019e919062000452565b604051809103906000f080158015620001bb573d6000803e3d6000fd5b50905090565b620001cb620002c5565b73ffffffffffffffffffffffffffffffffffffffff16620001eb62000158565b73ffffffffffffffffffffffffffffffffffffffff161462000244576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023b90620004ae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002b7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ae906200048c565b60405180910390fd5b620002c281620002cd565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6108fc80620005d083390190565b600081359050620003b081620005b5565b92915050565b600060208284031215620003c957600080fd5b6000620003d9848285016200039f565b91505092915050565b620003ed81620004e1565b82525050565b620003fe8162000515565b82525050565b600062000413602683620004d0565b915062000420826200053d565b604082019050919050565b60006200043a602083620004d0565b915062000447826200058c565b602082019050919050565b6000602082019050620004696000830184620003e2565b92915050565b6000602082019050620004866000830184620003f3565b92915050565b60006020820190508181036000830152620004a78162000404565b9050919050565b60006020820190508181036000830152620004c9816200042b565b9050919050565b600082825260208201905092915050565b6000620004ee82620004f5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005228262000529565b9050919050565b60006200053682620004f5565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b620005c081620004e1565b8114620005cc57600080fd5b5056fe608060405234801561001057600080fd5b506040516108fc3803806108fc83398181016040528101906100329190610277565b61004e61004361006360201b60201c565b61006b60201b60201c565b61005d8161012f60201b60201c565b506103f8565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61013d61006360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1661016161023960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae90610306565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021e906102e6565b60405180910390fd5b6102368161006b60201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600081519050610271816103e1565b92915050565b60006020828403121561028957600080fd5b600061029784828501610262565b91505092915050565b60006102ad602683610326565b91506102b882610369565b604082019050919050565b60006102d0602083610326565b91506102db826103b8565b602082019050919050565b600060208201905081810360008301526102ff816102a0565b9050919050565b6000602082019050818103600083015261031f816102c3565b9050919050565b600082825260208201905092915050565b600061034282610349565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6103ea81610337565b81146103f557600080fd5b50565b6104f5806104076000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063715018a6146100465780638da5cb5b14610050578063f2fde38b1461006e575b600080fd5b61004e61008a565b005b610058610112565b6040516100659190610392565b60405180910390f35b61008860048036038101906100839190610314565b61013b565b005b610092610233565b73ffffffffffffffffffffffffffffffffffffffff166100b0610112565b73ffffffffffffffffffffffffffffffffffffffff1614610106576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fd906103cd565b60405180910390fd5b610110600061023b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610143610233565b73ffffffffffffffffffffffffffffffffffffffff16610161610112565b73ffffffffffffffffffffffffffffffffffffffff16146101b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ae906103cd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021e906103ad565b60405180910390fd5b6102308161023b565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008135905061030e816104a8565b92915050565b60006020828403121561032657600080fd5b6000610334848285016102ff565b91505092915050565b610346816103fe565b82525050565b60006103596026836103ed565b915061036482610430565b604082019050919050565b600061037c6020836103ed565b91506103878261047f565b602082019050919050565b60006020820190506103a7600083018461033d565b92915050565b600060208201905081810360008301526103c68161034c565b9050919050565b600060208201905081810360008301526103e68161036f565b9050919050565b600082825260208201905092915050565b600061040982610410565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6104b1816103fe565b81146104bc57600080fd5b5056fea26469706673582212203be502654316c9991127d3792d0e84830dfd7a06f090ceae8f1df88be9755ade64736f6c63430008040033a2646970667358221220fb598dae851b6cda4b0cfe9a01498522537f964778a202501aac83c8abb5315564736f6c63430008040033";

export class FactoryFactory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryFactory> {
    return super.deploy(overrides || {}) as Promise<FactoryFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FactoryFactory {
    return super.attach(address) as FactoryFactory;
  }
  connect(signer: Signer): FactoryFactory__factory {
    return super.connect(signer) as FactoryFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryFactoryInterface {
    return new utils.Interface(_abi) as FactoryFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryFactory {
    return new Contract(address, _abi, signerOrProvider) as FactoryFactory;
  }
}
