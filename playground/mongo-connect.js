const {MongoClient,ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server")


    db.collection('users').insertOne({
        name:"ankaj",
        age:22,
        location:"Delhi"
    },(err,result)=>
    {
        if(err)
        {
            return console.log("Could not connect to the database")
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    });

//     db.collection('ToDos').insertOne({
//         text:"Something to do",
//         completed:false
//     },(err,result)=>
// {
//     if(err)
//     {
//         return console.log("Unable to insert"+err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// })
    db.close();
})