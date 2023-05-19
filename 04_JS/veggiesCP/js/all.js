let data = [];

axios.get('https://hexschool.github.io/js-filter-data/data.json')
    .then(function (response) {
        data = response.data;
        updateList(data);
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
let cropInput;

searchData.addEventListener('click', function (e) {
    if (e.target.classList.contains('search')) {
        if (e.target.value === '') {
            alert('請輸入作物名稱');
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