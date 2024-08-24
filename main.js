//import './style.css';
window.onload = function () {
  // タスク追加イベント
  const addTask = () => {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('input-text').value = '';

    createIncompleteTask(inputText);
  };

  // 未完了リスト追加
  const createIncompleteTask = (toDo) => {
    // li タグ生成
    const li = document.createElement('li');

    // div 生成
    const div = document.createElement('div');
    div.className = 'task-item';

    // リスト作成
    const p1 = document.createElement('p');
    p1.innerText = toDo;
    p1.className = 'task-p';

    // 完了ボタン
    const compBtn = document.createElement('button');
    compBtn.innerText = '完了';
    compBtn.addEventListener('click', () => {
      const li = compBtn.closest('li');
      compBtn.nextElementSibling.remove();
      compBtn.remove();

      document.getElementById('incompleteTaskList').removeChild(li);

      // 戻すボタン作成
      const backBtn = document.createElement('button');
      backBtn.setAttribute('id', 'backBtn');
      backBtn.className = 'backBtn';
      backBtn.innerText = '戻す';
      li.firstElementChild.appendChild(backBtn);
      backBtn.addEventListener('click', () => {
        const taskText = backBtn.previousElementSibling.innerText;
        createIncompleteTask(taskText);
        backBtn.closest('li').remove();
      });

      document.getElementById('completeTaskList').appendChild(li);
    });

    // 削除ボタン
    const delBtn = document.createElement('button');
    delBtn.innerText = '削除';
    delBtn.addEventListener('click', () => {
      const li = delBtn.closest('li');
      document.getElementById('incompleteTaskList').removeChild(li);
    });

    // 追加
    div.appendChild(p1);
    div.appendChild(compBtn);
    div.appendChild(delBtn);
    li.appendChild(div);
    const incompleteTaskList = document.getElementById('incompleteTaskList');
    incompleteTaskList.appendChild(li);
  };

  document.getElementById('add-button').addEventListener('click', addTask);
};
