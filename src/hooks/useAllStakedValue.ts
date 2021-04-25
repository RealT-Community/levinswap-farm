import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getLevinContract,
  getFarms,
  getTotalLPWethValue,
  isWeth,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const wethContact = getWethContract(sushi)
  const levinContact = getLevinContract(sushi)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          id,
          pid,
          lpContract,
          tokenContract,
        }: {
          id: string
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) => {
          const selectedContract = isWeth(id)
            ? wethContact
            : levinContact            

          return getTotalLPWethValue(
            masterChefContract,
            selectedContract,
            lpContract,
            tokenContract,
            pid,
          )
        }
      ),
    )

    setBalance(balances)
  }, [farms, levinContact, masterChefContract, wethContact])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllStakedValue()
    }
  }, [account, block, fetchAllStakedValue, masterChefContract, setBalance, sushi])

  return balances
}

export default useAllStakedValue
