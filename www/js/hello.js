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
        document.getElementById('cloudResponse').innerHTML = "<p>" + res[0] + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};
