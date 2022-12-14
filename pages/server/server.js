const express = require('express');
const next = require('next')
const port = 3006;
const dev = process.env.NODE_ENV != 'production'
const app = next({dev})
const handle = app.getRequestHandler();
const {parse} = require('url')