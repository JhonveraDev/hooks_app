import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Counter } from './01-useState/Counter';
// import { HooksApp } from './HooksApp';
// import { CustomHook } from './01-useState/CustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import './06-reducer/intro-reducer';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { TodoApp } from './06-reducer/TodoApp';
// import { Memorize } from './05-memo/Memorize';
import { MainApp } from './09-useContext/MainApp';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp /> */}
      {/* <Counter /> */}
      {/* <CustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <intro-reducer /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
