const { GenericRepository } = require("./generic.repository");

class UserRepository extends GenericRepository {
 constructor( { db }){
     super(db, "User");
 }
}

module.exports = UserRepository;