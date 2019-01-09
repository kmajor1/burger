var connection = require('./connection.js')

var orm = {
  selectAll: function() {
    var queryString = `select * from burgers`;

    var query = connection.query(queryString,function(err, results) {
      if (err) throw err; 

      console.log('BASE QUERY:', queryString)
      console.log('BUILT QUERY:', query.sql)
      console.log('QUERY RESULT:', results)
    })
  },
  insertOne: function(burgerName) {
    var queryString = `insert into burgers VALUES (null,?,0)`

    var query = connection.query(queryString, [burgerName], function(err, results){
      if (err) throw err 

      console.log('BASE QUERY:', queryString)
      console.log('BUILT QUERY:', query.sql)
      console.log('QUERY RESULT:', results)
    })
  },
  updateOne: function(id){
    var queryString = `update burgers set devoured = 1 where id = ?`

    var query = connection.query(queryString, [id], function(err, results) {
      if (err) throw err 

      console.log('BASE QUERY:', queryString)
      console.log('BUILT QUERY:', query.sql)
      console.log('QUERY RESULT:', results)
    })
  }
}

module.exports = orm 
