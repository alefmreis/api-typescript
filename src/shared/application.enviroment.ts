const Enviroment = {
  basePath: 'v1',
  databaseURI: `${process.env.MONGO_URI}`,
  databaseSettings: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

export { Enviroment };