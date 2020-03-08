const app = require('./app');

const PORT =  process.env.NODE_ENV === 'production' ? (process.env.PORT || 8080) : 3050;

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});