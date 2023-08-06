const addText = document.querySelector('.text')
const addBtn = document.querySelector('.btn_add')
const list = document.querySelector('.list')
let data = [];

//render資料
function renderData(arr) {
    let str = '';
    arr.forEach(function (item, index) {
        //${item.checked ? 'checked' : ''} item.checked如果是true則寫'checked'
        str += `<li>
                    <label class="checkbox" data-num="${index}" for="">
                        <input type="checkbox" ${item.checked ? 'checked' : ''} id="checkbox">
                        <span>${item.todo}</span>
                    </label>
                    <a href="#" class="delete"></a>
                </li>`
    })
    list.innerHTML = str;
}

//新增
addBtn.addEventListener('click', function (e) {
    if (addText.value === '') {
        alert('請輸入文字');
        return
    }
    let obj = {
        todo: addText.value,
        checked: false,
    };
    data.unshift(obj);
    addText.value = '';
    updateList();
})

//刪除
list.addEventListener('click', function (e) {
    if (e.target.getAttribute('class') !== "delete") {
        return
    }
    dataNum = e.target.getAttribute('data-num');
    data.splice(dataNum, 1);
    updateList();
})

    //清除已完成項目
    const listFooter = document.querySelector('.deleteDone');
    listFooter.addEventListener('click', function (e) {
            e.preventDefault();
            data = data.filter(function (item) {
                return !item.checked;
            });
        updateList();
    })

//分類切換
const tab = document.querySelector('.tab')

let toggle = 'all';
tab.addEventListener('click', function (e) {
    toggle = e.target.getAttribute('class');
    let tab = document.querySelectorAll('li')
    tab.forEach(function (item) {
        item.classList.remove('active');
    })
    e.target.classList.add('active');
    updateList();
})

//check狀態
list.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') == 'checkbox') {
        const dataNum = e.target.closest('li').querySelector('.checkbox').getAttribute('data-num');
        if (dataNum !== null) {
            const index = parseInt(dataNum);
            if (data[index]) {
                data[index].checked = e.target.checked; //input的checkbox勾選時為true
            }
        }
    }
    updateList()
})

//更新
function updateList() {
    let updateData = [];
    if (toggle === 'all' || toggle === 'all active') {
        updateData = data;
    } else if (toggle === 'todo' || toggle === 'todo active') {
        updateData = data.filter(function (item) {
            return item.checked === false;
        })
    } else if (toggle === 'done' || toggle === 'done active') {
        updateData = data.filter(function (item) {
            return item.checked === true;
        })
    }

    //x個待完成項目
    const todoNum = document.querySelector('.todoNum')
    let todoLength = data.filter(function (item) {
        return item.checked === false;
    })
    todoNum.textContent = todoLength.length + ' ';

    renderData(updateData);
}

//初始render
updateList();