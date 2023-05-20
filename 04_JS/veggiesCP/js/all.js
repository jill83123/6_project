let data = [];

axios.get('https://hexschool.github.io/js-filter-data/data.json')
    .then(function (response) {
        data = response.data;
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

buttonGroup.addEventListener('click', function (e) {
    const tab = document.querySelectorAll('button');
    type = e.target.dataset.type;

    tab.forEach(i => {
        i.classList.remove('active');
    })
    if (e.target.classList.contains('btn')) {
        e.target.classList.add('active');
    }
    updateList()
})

//搜尋
searchData = document.querySelector('.seach-group');
const cropInput = document.querySelector("input[type='text']");
let cropInputData;

searchData.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON') {
        if (cropInput.value === '') {
            alert('請輸入作物名稱');
            return;
        }
        cropInputData = data.filter(i => String(i.作物名稱).match(cropInput.value.trim()))
        renderData(cropInputData);
        if (cropInputData.length === 0) {
            showList.innerHTML = `<tr><td colspan="7" style="text-align: center">查無此資料</td></tr>`;
        }
    }
})

//分類
let updateData = [];
function updateList() {
    if (type === 'all') {
        updateData = data;
    } else if (type === 'N04') {
        updateData = data.filter(i => i.種類代碼 === 'N04')
    } else if (type === 'N05') {
        updateData = data.filter(i => i.種類代碼 === 'N05')
    } else if (type === 'N06') {
        updateData = data.filter(i => i.種類代碼 === 'N06')
    }
    renderData(updateData)
}

updateList();