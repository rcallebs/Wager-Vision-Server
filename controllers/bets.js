const express = require("express");
const { Bet } = require("../models");

const index = async (req, res, next) => {
  try {
    res.json(await Bet.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res, next) => {
  try {
    res.json(await Bet.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  // console.log('bet received', req.body);
  // try {
  //   res.json(await Bet.create(req.body));
  console.log("Received data:", req.body); // Log the received data
  try {
    const newBet = await Bet.create(req.body);
    console.log("Created bet:", newBet); // Log the created bet document
    res.json(newBet);
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    res.json(await Bet.findByIdAndDelete(req.params.id));
  } catch (errord) {
    res.status(400).json(error);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(
      await Bet.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  show,
  create,
  delete: destroy,
  update,
};
