window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        
        const contractAddress = 'CONTRACT_ADDRESS';
        const contractABI = CONTRACT_ABI;
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        
        document.getElementById('data-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = formData.get('data');
            
            await contract.methods.setData(data).send({ from: window.ethereum.selectedAddress });
            alert('Données ajoutées avec succès à la Blockchain !');
        });
    } else {
        alert('Veuillez installer MetaMask pour interagir avec la blockchain');
    }
});