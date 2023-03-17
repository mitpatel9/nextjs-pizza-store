import dbconnect from "../../../lib/mongodb";
import Message from '../../../models/message'

export default async function handler(req, res) {
  const { method ,query:{id}} = req;
  dbconnect();
  
  if (method == "GET") {
    try {
        const msg= await  Message.find();
        res.status(200).json(msg)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method == "POST") {
    try {
        const newmsg= await  Message.create(req.body);
        res.status(201).json(newmsg)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method == "DELETE") {
    try {
     
        await  Message.findByIdAndDelete(id);
        res.status(201).json("msg was delete")
    } catch (err) {
      console.log(err)
    }
  }
  
}
