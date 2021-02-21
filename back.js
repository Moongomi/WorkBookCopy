var workBook = [];

function getName(){
    let arr = [];
    let bookName = document.getElementsByClassName('page-header')[0].innerText.split('\n');
    arr.push(bookName);
    workBook.push(arr);
}

function getNumbers(){
    let arr = [];
    let temp = document.getElementsByClassName('table-striped')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for(var i = 0; i<temp.length; i++){
        arr.push(Number(temp[i].getElementsByTagName('td')[0].innerText));
    }

    workBook.push(arr);
}

function storageData(){
    chrome.storage.sync.set({'value':workBook},function(){
        alert('복사 완료');
    })
}

function setWorkBook(){
    chrome.storage.sync.get(['value'],function(result){
        inputBook(result.value);
    })
}

function inputBook(workBook){
    if(!workBook.length){
        alert('문제집이 비어있습니다.');
        return 0;
    }

    document.getElementsByClassName('form-control')[0].value = workBook[0][0][0];
    document.getElementsByClassName('form-control')[1].value = workBook[0][0][1];
    
    for(var i = 0; i < workBook[1].length; i++){
        $('input[name=problem]').val(workBook[1][i]);
        var actualCode = '(' + function() {
            var e = jQuery.Event("keypress");
            e.which = 13;
            $('input[name=problem]').trigger(e);
    } + ')();';
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head||document.documentElement).appendChild(script);
        script.remove();
   }
}

function delWorkBook(){
    chrome.storage.sync.remove(['value']);
    alert('삭제 완료');
}

function KeyDown(){
    document.onkeydown = function(event){
       if(event.altKey){
           {
               if(event.key=="1"){
                    getName();
                    getNumbers();
                    storageData();
               }

               if(event.key == "2"){
                    setWorkBook();
               }

               if(event.key == "3"){
                   delWorkBook();
               }
           }
       }
    }
}

KeyDown();
