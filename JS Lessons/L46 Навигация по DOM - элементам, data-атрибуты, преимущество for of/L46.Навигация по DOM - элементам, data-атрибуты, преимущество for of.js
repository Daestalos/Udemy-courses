
console.log(document.body);

// <------------- Получение дочерних элементов (нод) у родителя ------------------->

console.log(document.body.childNodes); // получаем NodeList
// NodeList(11)0: text1: div.wrapper2: text3: comment4: text5: script6: text7: comment8: text9: script10: textlength: 11[[Prototype]]: NodeList

// firstChild (firstElementChild)
console.log(document.body.firstChild); // получение первого элемента у родителя 
// = #text (не див, так как между каждым элементом идет перенос спроки, который нам не виден)
// lastChild (lastElementChild)
console.log(document.body.lastChild); // получение последнего элемента у родителя
//     <script src="L46.Навигация по DOM - элементам, data-атрибуты, преимущество for of.js"></script>


// <-------------- Получение подителя, соседей и детей --------------------->

<div class="wrapper">
    <div class="first">
        <button></button>
        <button id="current"></button>
        <button></button>
    </div>
</div>

// 1) .parrentNode (.parrentElement) - получаем родителя элемента (данную команду можно продублировать несколько раз, чтобы получить еще большего родителя)

console.log(document.querySelector('#current').parentNode); // <div class="first">...</div>

console.log(document.querySelector('#current').parentNode.parentNode);  // <div class="wrapper">...</div>

// 2) previousSibling (previousElementSibling) / nextSibling (nextElementSibling) - получение соседнего элемента

<div class="second">
<ul>
    <li>1</li>
    <li>2</li>
    <li data-current="3">3</li>

    <li>4</li>
    <li>5</li>
</ul>
</div>

console.log(document.querySelector('[data-current="3"]'.nextSibling)); // получим #text, так как следующим будет просто перенос строки

// для того, чтобы не получать именно элементы нужно воспользовоаться nextElementSibling

console.log(document.querySelector('[data-current="3"]'.nextElementSibling)); // <li>4</li>


// пример

for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
};