const checkPreapprovals = async (chain: string, contractAddress: string, activeGameAddress: string, walletSigner: Wallet) => {
  const contract = new Contract(contractAddress, abi, walletSigner);

  const isApproved = await contract.isApprovedForAll(activeGameAddress, contractAddress);
  if (!isApproved) {
    const approveTx = await contract.setApprovalForAll(activeGameAddress, true);
    await approveTx.wait();
    console.log(`Approved ${contractAddress} for ${activeGameAddress} on ${chain}`);
  }
};
