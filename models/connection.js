

const MongoClient = require('mongodb').MongoClient;
// const { connection_string } = require('./environment_variables');

class Connection {
  static async open() {
    // console.log("process.env.DATABASE_URL",process.env.DATABASE_URL)
    if (this.conn) return this.conn;
    this.conn = await MongoClient.connect(process.env.DATABASE_URL);
    // this.conn = await MongoClient.connect('mongodb://root:cedcommerce@127.0.0.1:27017/');
    return this.conn;
  }
}

Connection.conn = null;


module.exports = { Connection };
