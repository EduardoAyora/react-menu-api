const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/menu', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('DB connected')

    require('./createCategory')
    
});

