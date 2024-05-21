/*
Task 1
const input = document.getElementById('input')
input.addEventListener('change', () => {
  readXlsxFile(input.files[0]).then(function(rows) {
    console.log(rows);
    // `rows` is an array of rows
    // each row being an array of cells.
    console.log(rows)
    for (const i of rows) {
      console.log(i[2], i[3]);
    }
  })
})
*/

/* Task 2
var input = document.getElementById('input')
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

let sum = 0;
for (const i of rows) {
    if (i[11] == "kvinne") {
        sum++;
    }
}
console.log(`I listen har vi ${sum} kvinner.`);
  
   })
})
*/

/* Task 3
var input = document.getElementById('input')
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

let sum = 0;
for (const i of rows) {
  if (i[11] == "kvinne" && i[10] == "1MKB") {
    sum++;
    }
}
console.log(`I listen har vi ${sum} kvinner.`);
  
   })
})
*/

/* Task 4
var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {
        var divContainer = document.createElement("div");
        divContainer.className = 'container';
        document.body.append(divContainer);

        rows.forEach(function (row) {
            var img = document.createElement('img');
            img.src = row[7];
            divContainer.appendChild(img);
        });
    });
});
*/

/* Task 5
var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

        var divContainer = document.createElement("div");
        divContainer.className = 'container';
        document.body.append(divContainer);
      
        rows.forEach(element => {
          if (element[0] == "14") {
            var img = document.createElement('img');
            img.src = element[7]
            divContainer.appendChild(img);
          }
        });
    });
});
*/

/* Task 6
var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

        var divContainer = document.createElement("div");
        divContainer.className = 'container';
        document.body.append(divContainer);
      
        rows.forEach(element => {
          if (element[8] == "Asker") {
            var img = document.createElement('img');
            img.src = element[7]
            divContainer.appendChild(img);
          }
        });
    });
});
*/

/* Task 7
var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

        let eldsteStudenter = [];
        for (const element of rows) {
            if (element[4] == "21") {
                eldsteStudenter.push({ fornavn: element[2], etternavn: element[3], alder: element[4] });
            }
        }
        if (eldsteStudenter.length >= 2) {
            console.log(`De eldste elevene i hele skolen er:`);
            for (const student of eldsteStudenter) {
                console.log(`${student.fornavn} ${student.etternavn}, Alder: ${student.alder}`);
            }
        } 
    });
});
*/


/* Utfordring
// PS: Jeg brukte litt ChatGPT for denne koden for å fikse vanskelige problemer med koden min.
 var input = document.getElementById('input');
        input.addEventListener('change', function () {
            readXlsxFile(input.files[0]).then(function (rows) {

                var divBeholder = document.createElement("div");
                divBeholder.className = 'container';
                document.body.append(divBeholder);

                rows.forEach(element => {
                    if (element[4] == "15" && element[2]) {
                        var elevDiv = document.createElement('div');
                        elevDiv.className = 'student';

                        var navnParagraf = document.createElement('p');
                        navnParagraf.textContent = element[2];
                        elevDiv.appendChild(navnParagraf);

                        var bilde = document.createElement('img');
                        bilde.src = element[7];
                        elevDiv.appendChild(bilde);

                        divBeholder.appendChild(elevDiv);
                    }
                });
            });
        });
*/


/* Challenge
var input = document.getElementById('input');
input.addEventListener('change', function () {
    readXlsxFile(input.files[0]).then(function (rows) {

        let fravar = [];
        for (const row of rows) {
            if (row[12] > 6) {
                fravar.push(row[2]);
            }
        }
        if (fravar.length > 0) {
            console.log(`Elever med høyt fravær:`);
            console.log(fravar);
        }
    });
});
*/