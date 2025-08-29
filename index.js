
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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})


// call btn -2---------------------------------------------------


document.getElementById('call-btn-2').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Calling Police Helpline Number 999')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `Police Helpline Number<br>999`;

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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})


// call btn -3----------------------------

document.getElementById('call-btn-3').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Calling Fire Service Number 999')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `Fire Service Number<br>999`;

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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})




// call btn 4 -----------------------------------------------

document.getElementById('call-btn-4').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Calling Ambulance Service 1994-999999')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `Ambulance Service<br>1994-999999`;

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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})



// call btn - 5 -------------------------------

document.getElementById('call-btn-5').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Women & Child Helpline 109')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `Women & Child Helpline<br>109`;

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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})




// call btn 6 ----------------------------------------
document.getElementById('call-btn-6').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let coin = parseInt(coinElement.innerText);

    const historyList = document.getElementById('history-list')


    if (coin >= 20) {
        alert('📞 Anti-Corruption Helpline 106')
        coin = coin - 20
        coinElement.innerText = coin


        const element = document.createElement('div')
        element.className = "text-sm text-gray-700 flex justify-between";

        const left = document.createElement('div');
        left.innerHTML = `Anti-Corruption Helpline<br>106`;

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

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
    })


})




// heart butto functionality

const heartCount = document.getElementById('heart-count')
let heartCountNumber = parseInt(heartCount.innerText)

const heartButton = document.getElementsByClassName('heart-btn')

for (const btn of heartButton) {
    btn.addEventListener('click', function () {

        heartCountNumber = heartCountNumber + 1
        heartCount.innerText = heartCountNumber
    })
}




// copy btn functionality---------------------------

//copy btn 1----------------

const copyCount = document.getElementById('copy-count');
let copyCountNumber = parseInt(copyCount.innerText)

const copyButton = document.getElementsByClassName('copy-btn');
for (const btn of copyButton) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        const number = card.querySelector('h3').innerText;

        navigator.clipboard.writeText(number);
        copyCountNumber = copyCountNumber + 1
        copyCount.innerText = copyCountNumber;

        alert("Copied number: " + number);
    });
}