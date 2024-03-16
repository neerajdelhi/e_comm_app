const express = require('express');
const app = express();
const EventEmitter = require('events');

const event = new EventEmitter();
var count = 0;

event.on('APICall', ()=>{
    count++;
    console.warn('event',count);
});

app.get('/', (req, res)=>{
    res.send('app called');
    event.emit('APICall');
});

app.get('/search', (req, res)=>{
    res.send('search api');
    event.emit('APICall');
});

app.get('/update', (req, res)=>{
    res.send('update api');
    event.emit('APICall');
});

app.listen(5000,()=>{
    console.warn('app is listening.');
})