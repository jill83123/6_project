let data = [];
let originalData = []

axios.get('https://hexschool.github.io/js-filter-data/data.json')
    .then(function (response) {
        data = response.data;
        originalData = [...data]; //複製data 並且獨立數據
        renderData(data);
    });

const showList = document.querySelector('.showList');

//render資料
function renderData(arr) {
    let str = '';
    arr.forEach(i => {
        str += `<tr>
                <td>${i.作物名稱}</td>
                <td>${i.市場名稱}</td>
                <td>${i.上價}</td>
                <td>${i.中價}</td>
                <td>${i.下價}</td>
                <td>${i.平均價}</td>
                <td>${i.交易量}</td>
                </tr>`;
    });
    showList.innerHTML = str;
}

//分類顏色切換
buttonGroup = document.querySelector('.button-group');
let type = 'all';
let sortData = [];

buttonGroup.addEventListener('click', function (e) {
    const tab = document.querySelectorAll('button');
    type = e.target.dataset.type;

    tab.forEach(i => {
        i.classList.remove('active');
    })
    if (e.target.classList.contains('btn')) {
        e.target.classList.add('active');
    }
    //分類
    sortList();
    function sortList() {
        if (type === 'all') {
            sortData = data;
        } else if (type === 'N04') {
            sortData = data.filter(i => i.種類代碼 === 'N04')
        } else if (type === 'N05') {
            sortData = data.filter(i => i.種類代碼 === 'N05')
        } else if (type === 'N06') {
            sortData = data.filter(i => i.種類代碼 === 'N06')
        }
        renderData(sortData)
    }
})

//搜尋
searchData = document.querySelector('.seach-group');
const cropInput = document.querySelector("input[type='text']");
let cropInputData;

function search(e) {
    if (e.target.nodeName === 'BUTTON' || e.key === 'Enter') {
        if (cropInput.value === '') {
            alert('請輸入作物名稱');
            data = originalData
            renderData(data);
            return;
        }
        cropInputData = data.filter(i => String(i.作物名稱).match(cropInput.value.trim()))
        renderData(cropInputData);
        if (cropInputData.length === 0) {
            showList.innerHTML = `<tr><td colspan="7" style="text-align: center">查無此資料</td></tr>`;
        }
    }
}

searchData.addEventListener('click', function (e) {
    search(e)
})

searchData.addEventListener('keypress', function (e) {
    search(e)
})

//下拉排序
sortSelect = document.querySelector('.sort-select');

sortSelect.addEventListener('change', function (e) {
    if (cropInput !== '') {
        data = cropInputData;
    }
    if (sortData !== 0) {
        data = sortData;
    }
    switch (e.target.value) {
        case "排序篩選":
            data = originalData
            renderData(data);
            break
        case "依上價排序":
            sortItems("上價")
            break
        case "依中價排序":
            sortItems("中價")
            break
        case "依下價排序":
            sortItems("下價")
            break
        case "依平均價排序":
            sortItems("平均價")
            break
        case "依交易量排序":
            sortItems("交易量")
            break
    }
    function sortItems(value) {
        data.sort((a, b) => { return a[value] - b[value]; })
    }
    renderData(data);
})

//標籤排序
iSort = document.querySelector('.js-sort-advanced');

iSort.addEventListener('click', function (e) {
    const iPrice = e.target.dataset.price

    if (e.target.nodeName === 'I') {
        if (e.target.dataset.sort === 'up') {
            data.sort((a, b) => { return a[iPrice] - b[iPrice]; })
        } else if (e.target.dataset.sort === 'down') {
            data.sort((a, b) => { return b[iPrice] - a[iPrice]; })
        }
    }
    renderData(data);
})

renderData(data);