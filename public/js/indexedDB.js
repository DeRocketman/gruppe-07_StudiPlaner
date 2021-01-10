/*
    js-Datei fuer die IndexedDB
 */
//
var request=indexedDB.open('WP07', 1);
request.addEventListener('error', showerror, false);
request.addEventListener('success', start, false);
request.addEventListener('upgradeneeded', createdb);

function createdb(e) {
    var database = e.target.result;
    var myobjectstore=database.createObjectStore('projektName',{keyPath: 'nummer', autoIncrement:true});
    myobjectstore.createIndex('projektName', 'nummer', {unique: true})
}

function showerror(e) {
    alert('Error: ' +e.code+' '+e.message);
}

function start(e) {
    db=e.result || e.target.result;
    console.log("DB-Version ist: " + db.version);
}

