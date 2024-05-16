const express = require("express");
const { Bet } = require("../models");

const index = async (req, res, next) => {
  try {
    const userId = res.locals.payload.id;
    res.json(await Bet.find({ userId }));
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
  try {
    console.log(res.locals.payload);
    req.body.userId = res.locals.payload.id;
    console.log(req.body);
    const newBet = await Bet.create(req.body);
    console.log("Created bet:", newBet);
    res.json(newBet);
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    res.json(await Bet.findByIdAndDelete(req.params.id));
  } catch (error) {
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
