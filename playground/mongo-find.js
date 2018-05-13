const {MongoClient,ObjectId} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server")


    db.collection('ToDos').find().toArray().then((docs)=>
    {
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
    },(err)=>
    {
        console.log("unable to fetch docs",err);   
    });
});
      