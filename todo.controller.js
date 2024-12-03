
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get all todos
const getAllTodos = async (req, res) => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('id', { ascending: true });

  if (error) res.status(500).json({ error: error.message });
  else res.json(data);
};

// Add a new todo
const createTodo = async (req, res) => {
  const { task } = req.body;
  const { data, error } = await supabase
    .from('todos')
    .insert([{ task, completed: false }])
    .select();

  if (error) res.status(500).json({ error: error.message });
  else res.json(data[0]);
};

// Update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const { data, error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)
    .select();

  if (error) res.status(500).json({ error: error.message });
  else res.json(data[0]);
};

// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('todos').delete().eq('id', id);

  if (error) res.status(500).json({ error: error.message });
  else res.json({ status: 'success', message: 'Todo deleted successfully' });
};

const clearTodos = async (req, res) => {
  const { error } = await supabase.from('todos').delete().neq('id', '100');
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