import mongoose from 'mongoose'

const connect = async(): Promise<void> => {
  try {
    await mongoose.connect('mongodb+srv://Lazar:lakierbes@cluster0.9smqe.mongodb.net/mongo?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      useCreateIndex: true
    })
    console.log('Database connected')
  } catch(error) {
    console.log(error)
    process.exit(1);
  }
}



export const db = {
  connect
}

