
// call button functionality



//call btn-1---------------------------

document.getElementById('call-btn-1').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Calling National Emergency Number 999')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `National Emergency Service<br>999`;

        const right = document.createElement('span');
        right.className = "text-gray-500 text-xs";
        right.textContent = new Date().toLocaleTimeString('en-US', { hour12: true });

        element.appendChild(left);
        element.appendChild(right);

        historyList.appendChild(element);


    } else {
        alert('❌ Not enough coin .Minimum 20 coin need for call.')
    }



    const clearHistory = document.getElementById('clear-history')

    clearHistory.addEventListener('click', function() {
        historyList.innerHTML = '';
    })


})