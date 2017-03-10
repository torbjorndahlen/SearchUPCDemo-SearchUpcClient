document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello/search',
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res[0].productname + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};

document.getElementById('get_recent').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello/recent',
        method: "GET"
      },
      function (res) {
        //document.getElementById('cloudResponse').innerHTML = "<p>" + res[0] + "</p>";

        var myTableDiv = document.getElementById("cloudResponse");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');

        table.border = '1';

        for (i = 0; i < res.length; i++) {
          var tr = document.createElement('TR');
          var td = document.createElement('TD');
          td.appendChild(document.createTextNode(res[i]));
          tr.appendChild(td);
          tableBody.appendChild(tr);
        }

        table.appendChild(tableBody);

        myTableDiv.innerHTML = table;
        
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};
