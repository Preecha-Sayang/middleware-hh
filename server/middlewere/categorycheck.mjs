function categorycheck(req, res, next) {
  const wall = ["Math", "English", "Biology"];
  const wallcheck = wall.includes(req.body.category);

  if (!wallcheck) {
    return res.status(400).json({ "message": "Do not have category" });
  }

  if(!req.body.content.length >=500 && req.body.content.length <=1000 ){
   return  res.status(400).json({"message":"wrong contect"})
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(req.body.email)) {
    return res.status(400).json({"message":"wrong Email"})
  }

  if(req.body.title.trim()== ""){
    return res.status(400).json({"message":"wrong title"})
  }
  next(); 
}

export default categorycheck;