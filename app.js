const express = require('express')
const app = express()

const data = require('data.json')
const path = require('path')
const pug = require('pug')

app.set('view engine', 'pug')

app.use(express.static('public'))