import dbconnect from "../../../lib/mongodb";
import Product from '../../../models/Product'

export default async function handler(req, res) {
  const { method, query:{id}} = req;

  dbconnect();

  if (method === "GET") {
    try {
        const product= await  Product.findById(id);
        res.status(200).json(product)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  if (method === "PUT") {
    try {
        const product= await  Product.findById(id);
        res.status(200).json(product)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  if (method === "DELETE") {
    try {
        const product= await  Product.findById(id);
        res.status(200).json(product)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  
}
