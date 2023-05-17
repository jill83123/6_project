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

renderData(data);