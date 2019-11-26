const Enviroment = {
  basePath: 'v1',
  databaseURI: `${process.env.MONGO_URI}`,
  databaseName: `${process.env.DB_NAME}`,
  databaseSettings: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

export { Enviroment };