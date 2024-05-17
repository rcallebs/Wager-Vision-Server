const express = require("express");
const { Post } = require("../models");

const index = async (req, res, next) => {
  try {
    // const userId = res.locals.payload.id;
    res.json(await Post.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res, next) => {
  try {
    res.json(await Post.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res, next) => {
  try {
    req.body.userId = res.locals.payload.id;
    const newPost = await Post.create(req.body);
    res.json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res, next) => {
  try {
    res.json(await Post.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  show,
  create,
  delete: remove,
  update,
};
