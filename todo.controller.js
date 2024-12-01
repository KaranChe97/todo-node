
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get all todos
const getAllTodos = async (req, res) => {
  var error = ""
  var data = []

  if (error) res.status(500).json({ error: error.message });
  else res.json(data);
};

// Add a new todo
const createTodo = async (req, res) => {
  var error = ""
  var data = []

  if (error) res.status(500).json({ error: error.message });
  else res.json([]);
};

// Update a todo
const updateTodo = async (req, res) => {
  var error = ""
  var data = []

  if (error) res.status(500).json({ error: error.message });
  else res.json([]);
};

// Delete a todo
const deleteTodo = async (req, res) => {
  var error = ""
  var data = []
  if (error) res.status(500).json({ error: error.message });
  else res.json({ status: 'success', message: 'Todo deleted successfully' });
};

const clearTodos = async (req, res) => {
  var error = ""
  var data = [] ;
   if (error) res.status(500).json({ error: error.message });
  else res.json({ status: 'success', message: 'Todos cleared successfully' });
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  clearTodos
};