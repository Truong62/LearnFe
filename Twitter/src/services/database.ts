import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@x.tfsrqui.mongodb.net/?retryWrites=true&w=majority`

class databaseServices {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }

  async run() {
    try {
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      await this.client.close()
    }
  }
}

const databaseSv = new databaseServices()
export default databaseSv
