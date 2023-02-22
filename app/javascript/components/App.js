import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Editor from './Editor';

const App = () => {
  <div>
    <Route path="/events/:id?" element={<Editor/>} />
  </div>
}

export default App;
