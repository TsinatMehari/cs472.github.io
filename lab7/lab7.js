function TaskSaver() {
    let task = document.getElementById('myInput').value;
    let words = localStorage.getItem("ibu");
    if(words!=null){
     localStorage.setItem("ibu", words + "\n" + task);
    }
    else{
      localStorage.setItem("ibu",  "\n" + task);
    }
      tasklist.innerHTML = localStorage.ibu;
      document.getElementById('myInput').value = null;
    }
    function TaskClear() {
      document.getElementById('myInput').value = null;
      window.localStorage.clear();
      location.reload();
    }